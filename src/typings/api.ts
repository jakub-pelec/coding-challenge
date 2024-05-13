interface ApiResponse<T> {
  results: Array<T>;
  info: {
    page: number;
    results: number;
    seed: string;
    version: string;
  };
}
