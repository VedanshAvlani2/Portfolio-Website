"use client";
import React from "react";

type Props = {
  children: React.ReactNode;
  /** Rendered instead of children when the subtree throws. Defaults to nothing. */
  fallback?: React.ReactNode;
  /** Called once when an error is caught, e.g. to release a loading gate. */
  onError?: () => void;
};

type State = { hasError: boolean };

/**
 * Catches render/runtime errors in a subtree so one failing widget cannot take
 * the whole page down with it.
 *
 * This exists because @splinetool/react-spline throws when its remote scene
 * fails to fetch (slow mobile connection, blocked CDN, offline). With no
 * boundary, React unmounts the entire app and the visitor sees a blank screen.
 */
class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error) {
    console.error("ErrorBoundary caught:", error);
    this.props.onError?.();
  }

  render() {
    if (this.state.hasError) return <>{this.props.fallback ?? null}</>;
    return <>{this.props.children}</>;
  }
}

export default ErrorBoundary;
