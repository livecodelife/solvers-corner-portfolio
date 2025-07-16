import { track as vercelTrack } from '@vercel/analytics';

// Base tracking function that wraps Vercel Analytics
export async function track(eventName: string, properties?: Record<string, any>) {
  try {
    await vercelTrack(eventName, properties);
  } catch (error) {
    // Silently fail in development or if analytics fails
    if (process.env.NODE_ENV === 'development') {
      console.log(`Analytics: ${eventName}`, properties);
    }
  }
}

// Type definitions for tracking events
export interface ContentCardClickEvent {
  category: string;
  itemTitle: string;
}

export interface CarouselNavigationEvent {
  direction: 'next' | 'previous';
  category: string;
}

export interface HeroButtonClickEvent {
  buttonType: string;
  destination: string;
}

export interface ModalInteractionEvent {
  actionType: 'open' | 'close' | 'submit';
  itemTitle: string;
  category: string;
}

export interface VideoControlEvent {
  action: 'mute' | 'unmute';
}

export interface PageNavigationEvent {
  from?: string;
  to: string;
}

export interface SplashScreenCompletionEvent {
  duration: number;
}

// Typed tracking functions
export function trackContentCardClick({ category, itemTitle }: ContentCardClickEvent) {
  return track('content_card_click', {
    category,
    item_title: itemTitle,
  });
}

export function trackCarouselNavigation({ direction, category }: CarouselNavigationEvent) {
  return track('carousel_navigation', {
    direction,
    category,
  });
}

export function trackHeroButtonClick({ buttonType, destination }: HeroButtonClickEvent) {
  return track('hero_button_click', {
    button_type: buttonType,
    destination,
  });
}

export function trackModalInteraction({ actionType, itemTitle, category }: ModalInteractionEvent) {
  return track('modal_interaction', {
    action_type: actionType,
    item_title: itemTitle,
    category,
  });
}

export function trackVideoControl({ action }: VideoControlEvent) {
  return track('video_control', {
    action,
  });
}

export function trackPageNavigation({ from, to }: PageNavigationEvent) {
  return track('page_navigation', {
    from: from || 'unknown',
    to,
  });
}

export function trackSplashScreenCompletion({ duration }: SplashScreenCompletionEvent) {
  return track('splash_screen_completion', {
    duration,
  });
}

// Analytics component for initialization
export function Analytics() {
  // This component can be used to initialize analytics
  // Currently, Vercel Analytics is auto-initialized, so this is a placeholder
  return null;
}