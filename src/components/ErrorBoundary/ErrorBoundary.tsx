import React, { PropsWithChildren } from "react";

interface IProps extends PropsWithChildren {}
interface IState {
  message: string;
  hasError: boolean;
}

export class ErrorBoundary extends React.Component<IProps, IState> {
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
