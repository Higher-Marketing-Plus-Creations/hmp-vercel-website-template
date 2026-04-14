"use client";

import { useState, useTransition } from "react";

import type { SelectOption } from "@/lib/types";

type FormField = {
  label: string;
  name: string;
  options?: SelectOption[];
  placeholder?: string;
  required?: boolean;
  rows?: number;
  type?: "email" | "select" | "tel" | "text" | "textarea";
};

type LeadFormProps = {
  endpoint: string;
  fields: FormField[];
  submitLabel: string;
  successMessage: string;
};

type FormStatus = {
  message: string;
  tone: "error" | "idle" | "success";
};

const initialStatus: FormStatus = { message: "", tone: "idle" };

export function LeadForm({ endpoint, fields, submitLabel, successMessage }: LeadFormProps) {
  const [status, setStatus] = useState<FormStatus>(initialStatus);
  const [isPending, startTransition] = useTransition();

  return (
    <form
      className="form"
      onSubmit={(event) => {
        event.preventDefault();
        const form = event.currentTarget;
        const formData = new FormData(form);
        const payload = Object.fromEntries(formData.entries());

        startTransition(() => {
          void (async () => {
            setStatus(initialStatus);

            try {
              const response = await fetch(endpoint, {
                body: JSON.stringify(payload),
                headers: {
                  "Content-Type": "application/json"
                },
                method: "POST"
              });

              const data = (await response.json().catch(() => null)) as
                | { detail?: string }
                | null;

              if (!response.ok) {
                throw new Error(data?.detail ?? "Unable to submit your request right now.");
              }

              form.reset();
              setStatus({ message: successMessage, tone: "success" });
            } catch (error) {
              setStatus({
                message: error instanceof Error ? error.message : "Something went wrong.",
                tone: "error"
              });
            }
          })();
        });
      }}
    >
      {fields.map((field) => (
        <label className="field" key={field.name}>
          <span>{field.label}</span>
          {field.type === "textarea" ? (
            <textarea
              name={field.name}
              placeholder={field.placeholder}
              required={field.required}
              rows={field.rows ?? 5}
            />
          ) : field.type === "select" ? (
            <select defaultValue="" name={field.name} required={field.required}>
              <option disabled value="">
                {field.placeholder ?? "Select an option"}
              </option>
              {field.options?.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          ) : (
            <input
              name={field.name}
              placeholder={field.placeholder}
              required={field.required}
              type={field.type ?? "text"}
            />
          )}
        </label>
      ))}
      <button className="button" disabled={isPending} type="submit">
        {isPending ? "Submitting..." : submitLabel}
      </button>
      <div aria-live="polite" className="status" data-tone={status.tone === "idle" ? undefined : status.tone}>
        {status.message}
      </div>
    </form>
  );
}
