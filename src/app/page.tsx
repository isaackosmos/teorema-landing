import { redirect } from "next/navigation";

/**
 * Root route. This repo hosts multiple independent product landing pages
 * under /app/<product>/ — there is no shared "home" page yet, so this
 * redirects to the current flagship product. Replace with a real
 * portfolio index once there is more than one product worth listing.
 */
export default function RootPage() {
  redirect("/vendor-praxis");
}
