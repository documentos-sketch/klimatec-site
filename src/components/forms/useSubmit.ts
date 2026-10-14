"use client";

import { useState, type FormEvent } from "react";
import { submitForm, type SubmitState } from "@/lib/submit";

export function useSubmit(formName: string, refPrefix: string, extraValidate?: (form: HTMLFormElement) => string | null) {
  const [state, setState] = useState<SubmitState>({ status: "idle" });

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    const custom = extraValidate?.(form);
    if (custom) {
      setState({ status: "error", message: custom });
      return;
    }
    setState({ status: "sending" });
    const result = await submitForm(form, formName, refPrefix);
    setState(result);
    if (result.status === "success") form.reset();
  }

  return { state, onSubmit, sending: state.status === "sending" };
}
