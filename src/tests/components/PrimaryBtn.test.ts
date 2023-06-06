import { mount } from "@vue/test-utils";
import PrimaryBtn from "../../components/buttons/PrimaryBtn.vue";

describe("PrimaryBtn", () => {
  it("should display the button text correctly", () => {
    const btnText = "Create QRCode";
    const wrapper = mount(PrimaryBtn, {
      props: { btnText, isPrimary: true },
    });
    expect(wrapper.find("button").text()).toEqual(btnText);
  });

  it("should be a primary button", () => {
    const btnText = "Create QRCode";
    const wrapper = mount(PrimaryBtn, {
      props: { btnText, isPrimary: true },
    });

    const classes = [
      "shadow-xs",
      "py-2.5",
      "border",
      "font-medium",
      "px-5",
      "rounded-lg",
      "bg-violet-600",
      "border-violet-600",
      "hover:bg-violet-700",
      "text-white",
    ];

    expect(wrapper.classes().length).toEqual(classes.length);
    expect(wrapper.classes()).toEqual(classes);
  });
});
