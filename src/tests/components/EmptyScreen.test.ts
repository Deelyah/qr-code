import EmptyScreen from "../../components/errors/EmptyScreen.vue";
import { mount } from "@vue/test-utils";

describe("BaseCard", () => {
  it("should render the correct text", () => {
    const text = "No codes have been generated!";
    const wrapper = mount(EmptyScreen);
    expect(wrapper.find("h3").text()).toEqual(text);
  });
});
