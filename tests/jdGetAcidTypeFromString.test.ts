import { jdGetAcidTypeFromString } from "../src/jdGetAcidTypeFromString";
import { expect } from "chai";

describe("Test all valid input types", (): void => {
  it("Should recognise a valid & strict area", (): void => {
    const jdAcidType = jdGetAcidTypeFromString("10-19 Horses");
    expect(jdAcidType).is.eql({
      jdAcidType: "area",
      strict: true,
    });
  });
  it("Should recognise a valid & weak area", (): void => {
    const jdAcidType = jdGetAcidTypeFromString("34-87 Horses");
    expect(jdAcidType).is.eql({
      jdAcidType: "area",
      strict: false,
    });
  });
  it("Should trim its input", (): void => {
    const jdAcidType = jdGetAcidTypeFromString("  10-19 Horses  ");
    expect(jdAcidType).is.eql({
      jdAcidType: "area",
      strict: true,
    });
  });
  it("Should trim its input", (): void => {
    const jdAcidType = jdGetAcidTypeFromString("   34-87 Horses    ");
    expect(jdAcidType).is.eql({
      jdAcidType: "area",
      strict: false,
    });
  });

  it("Should recognise a category", (): void => {
    const jdAcidType = jdGetAcidTypeFromString("10 Chickens");
    expect(jdAcidType).is.eql({
      jdAcidType: "category",
      strict: true,
    });
  });

  it("Should recognise an ID", (): void => {
    const jdAcidType = jdGetAcidTypeFromString("10.01 Jiminy!");
    expect(jdAcidType).is.eql({
      jdAcidType: "id",
      strict: true,
    });
  });

  it("Should fail on anything else", (): void => {
    const jdAcidType = jdGetAcidTypeFromString("1 0-19 is not an area");
    expect(jdAcidType).is.eql({
      jdAcidType: false,
    });
  });
});
