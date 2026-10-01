"use client";

import { track } from "../lib/track";
import { waLink } from "../lib/whatsapp";

// Enlace a WhatsApp con mensaje prellenado y evento de analítica.
export default function WhatsAppLink({ message, location, className = "", children, ...rest }) {
  return (
    <a
      href={waLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => track("whatsapp_click", { location })}
      className={className}
      {...rest}
    >
      {children}
    </a>
  );
}
