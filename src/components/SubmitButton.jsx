import React from "react";
import { useNavigation } from "react-router-dom";

export default function SubmitButton({ text }) {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  return (
    <button
      type="submit"
      className="btn btn-primary btn-block"
      disabled={isSubmitting}
    >
      {isSubmitting ? (
        <>
          <span
            className="loading loading-spinner"
            role="status"
            aria-hidden="true"
          ></span>
          Enviando...
        </>
      ) : (
        text || "Enviar"
      )}
    </button>
  );
}
