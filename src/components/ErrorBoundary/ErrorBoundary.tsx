import React, { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {}
interface State {
  message: string;
  hasError: boolean;
}

export class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      message: "",
      hasError: false,
    };
  }

  static getDerivedStateFromError(error: string) {
    return {
      hasError: true,
      message: error,
    };
  }

  render(): React.ReactNode {
    return this.state.hasError ? (
      <div>Error: {this.state.message}</div>
    ) : (
      this.props.children
    );
  }
}
