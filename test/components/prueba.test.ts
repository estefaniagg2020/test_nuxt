import { render, RenderResult } from "@testing-library/vue";
import { describe, expect, it } from "vitest";
import { createTestingPinia } from "@pinia/testing";

import { mount } from "@vue/test-utils";
import prueba from "~/components/prueba.vue";

describe("Test example", () => {



  it("should show h1", async() => {
    vi.stubGlobal("useConfigSite", () => ({ staticsUrl: "prueba" }));
    vi.stubGlobal("useAppConfig", () => ({}));
    vi.stubGlobal("useData", () => ({}));
    vi.stubGlobal("useVars", () => ({}));
  
    const pinia = createTestingPinia();
    const wrapper = mount(prueba, {
      
      global: {
        plugins: [pinia],
        components: {},
      },
    });
    console.log();
    await wrapper.vm.$nextTick();

    console.log(wrapper.html());
    const h1Element = wrapper.find("h1");

    expect(h1Element.exists()).toBe(true);
  })
})