import React from "react";
import { act, render, screen, fireEvent } from "@testing-library/react";
import Product from "./Product";

describe("Product", () => {
  beforeEach(() => {
    jest.spyOn(global, "fetch").mockResolvedValue({
      json: jest.fn().mockResolvedValue({
        product: {
          title: "Nintendo Switch Console",
          colours: [
            {
              color: "pink",
              image:
                "https://media.very.co.uk/i/very/QE9G4_SQ1_0000000054_CORAL_SLf?$550x733_standard$",
              defaultImage: true,
            },
            {
              color: "grey",
              image:
                "https://media.very.co.uk/i/very/PEM4V_SQ1_0000000005_GREY_SLf?$550x733_standard$",
              defaultImage: false,
            },
          ],
        },
      }),
    });
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("renders the default product image with alt tag", async () => {
    await act(async () => {
      render(<Product />);
    });

    const productImage = screen.getByTestId("product-image");

    expect(productImage.src).toBe(
      "https://media.very.co.uk/i/very/QE9G4_SQ1_0000000054_CORAL_SLf?$550x733_standard$"
    );

    expect(productImage.alt).toBe("Nintendo Switch Console");
  });

  it("renders a product title", async () => {
    await act(async () => {
      render(<Product />);
    });

    const productTitle = screen.getByTestId("product-title");

    expect(productTitle.textContent).toBe("Nintendo Switch Console");
  });

  it("renders the product colour options", async () => {
    await act(async () => {
      render(<Product />);
    });

    const colourOptions = screen.getAllByTestId("colour-option");

    expect(colourOptions.length).toBe(2);
    expect(colourOptions[0].textContent).toBe("Pink");
    expect(colourOptions[1].textContent).toBe("Grey");
  });

  it("renders a quantity input with initial value of 1", async () => {
    await act(async () => {
      render(<Product />);
    });

    const productQuantity = screen.getByTestId("product-quantity");

    expect(productQuantity.value).toBe("1");
  });

  it("renders add to basket button", async () => {
    await act(async () => {
      render(<Product />);
    });

    const addToBasketBtn = screen.getByTestId("add-to-basket-btn");

    expect(addToBasketBtn.textContent).toBe("Add to Basket");
  });

  it("changing the colour option updates the product image", async () => {
    await act(async () => {
      render(<Product />);
    });

    const colourSelect = screen.getByTestId("colour-select");

    fireEvent.change(colourSelect, {
      target: { value: "Grey" },
    });

    const productImage = screen.getByTestId("product-image");

    expect(productImage.src).toBe(
      "https://media.very.co.uk/i/very/PEM4V_SQ1_0000000005_GREY_SLf?$550x733_standard$"
    );
  });

  it("clicking add to bag triggers an alert with options selected", async () => {
    window.alert = jest.fn();

    await act(async () => {
      render(<Product />);
    });

    const addToBasketBtn = screen.getByTestId("add-to-basket-btn");

    fireEvent.click(addToBasketBtn);

    expect(window.alert).toBeCalledWith(
      "You've added 1 Pink Nintendo Switch Console to your basket!"
    );
  });

  it("clicking add to bag after changing all options triggers an alert with correct options selected", async () => {
    window.alert = jest.fn();

    await act(async () => {
      render(<Product />);
    });

    const colourSelect = screen.getByTestId("colour-select");
    const productQuantity = screen.getByTestId("product-quantity");
    const addToBasketBtn = screen.getByTestId("add-to-basket-btn");

    fireEvent.change(productQuantity, { target: { value: 2 } });
    fireEvent.change(colourSelect, {
      target: { value: "Grey" },
    });
    fireEvent.click(addToBasketBtn);

    expect(window.alert).toBeCalledWith(
      "You've added 2 Grey Nintendo Switch Consoles to your basket!"
    );
  });
});
