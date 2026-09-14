import { usePostHog } from 'posthog-js/react';

export const buttonEventHandler = () => {
  const posthog = usePostHog();
  return (page: string, itemType: string) => posthog.capture('button_clicked', { button_name: `${page} ${itemType}` });
}