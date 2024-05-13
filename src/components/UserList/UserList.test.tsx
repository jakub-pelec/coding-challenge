import { render, screen, fireEvent } from "@testing-library/react";
import { it, describe, beforeAll, afterEach, afterAll, expect } from "vitest";
import { QueryClient, QueryClientProvider } from "react-query";
import { http, HttpResponse } from "msw";
import { setupServer } from "msw/node";
import UserList from "./UserList";
import { MemoryRouter } from "react-router-dom";

const server = setupServer(
  http.get("https://randomuser.me/api/", () => {
    return HttpResponse.json({
      results: [
        {
          id: { value: "1" },
          name: { first: "John", last: "Doe" },
          email: "john.doe@example.com",
          picture: { medium: "https://randomuser.me/api/portraits/men/1.jpg" },
        },
        {
          id: { value: "2" },
          name: { first: "Jane", last: "Smith" },
          email: "jane.smith@example.com",
          picture: {
            medium: "https://randomuser.me/api/portraits/women/2.jpg",
          },
        },
      ],
      info: { page: 1 },
    });
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

const queryClient = new QueryClient();

describe("UserList", () => {
  it("renders user list correctly", async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <MemoryRouter>
          <UserList />
        </MemoryRouter>
      </QueryClientProvider>
    );

    // Loading state
    expect(screen.getByText("Loading...")).toBeDefined();

    // Wait for loading to finish
    await screen.findAllByText("User List");

    // Check if user list is rendered
    expect(screen.getByText("John Doe")).toBeDefined();
    expect(screen.getByText("Jane Smith")).toBeDefined();
  });

  it("filters users correctly", async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <MemoryRouter>
          <UserList />
        </MemoryRouter>
      </QueryClientProvider>
    );

    // Wait for loading to finish
    await screen.findAllByText("User List");

    // Type in the filter input
    fireEvent.change(screen.getAllByPlaceholderText("Filter by name...")[0], {
      target: { value: "Jane" },
    });

    // Check if only Jane Smith is rendered
    expect(screen.getAllByText("Jane Smith")).toBeDefined();
    expect(screen.queryByText("John Doe")).toBeDefined();
  });
});
