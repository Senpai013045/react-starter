import {ReduxDemo} from "./ReduxDemo";
import {render} from "@testing-library/react";
import {Provider} from "react-redux";
import {store} from "../../../store";

let MockComponent = () => {
  return (
    <Provider store={store}>
      <ReduxDemo />
    </Provider>
  );
};

describe("Redux counter demo", () => {
  it("renders without crashing", () => {
    const {getByTestId} = render(<MockComponent />);
    const count = getByTestId("count");
    expect(count.textContent).toBe("0");
  });

  test("increment button works", () => {
    const {getByRole, getByTestId} = render(<MockComponent />);
    const incrementButton = getByRole("button", {
      name: "Increment",
    });
    expect(incrementButton).toBeInTheDocument();
    const count = getByTestId("count");
    expect(count.textContent).toBe("0");
    incrementButton.click();
    expect(count.textContent).toBe("1");
  });

  test("decrement button works", () => {
    const {getByRole, getByTestId} = render(<MockComponent />);
    const decrementButton = getByRole("button", {
      name: "Decrement",
    });
    expect(decrementButton).toBeInTheDocument();
    const count = getByTestId("count");
    const initialCount = Number(count.textContent);
    decrementButton.click();
    expect(count.textContent).toBe(`${initialCount - 1}`);
  });

  test("reset button works", () => {
    const {getByRole, getByTestId} = render(<MockComponent />);
    const resetButton = getByRole("button", {
      name: "Reset",
    });
    expect(resetButton).toBeInTheDocument();
    const count = getByTestId("count");
    const initialCount = Number(count.textContent);
    resetButton.click();
    expect(count.textContent).toBe(`${initialCount - initialCount}`);
  });

  test("Add 5 button works", () => {
    const {getByRole, getByTestId} = render(<MockComponent />);
    const add5Button = getByRole("button", {name: "Add 5"});
    expect(add5Button).toBeInTheDocument();
    const count = getByTestId("count");
    const initialCount = Number(count.textContent);
    add5Button.click();
    expect(count.textContent).toBe(`${initialCount + 5}`);
  });

  test("Subtract 5 button works", () => {
    const {getByRole, getByTestId} = render(<MockComponent />);
    const subtract5Button = getByRole("button", {name: "Subtract 5"});
    expect(subtract5Button).toBeInTheDocument();
    const count = getByTestId("count");
    const initialCount = Number(count.textContent);
    subtract5Button.click();
    expect(count.textContent).toBe(`${initialCount - 5}`);
  });
});
