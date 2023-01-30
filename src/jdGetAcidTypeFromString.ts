interface JDAcidType {
  jdAcidType: "area" | "category" | "id" | false;
  strict?: boolean;
}

/**
 * Tells you if your input is a JD area, category, or id. Returns
 * `false` if not.
 *
 * Expects your JD ACID followed by a title, e.g. '10-19 Area'.
 * Perhaps split out the part that's doing the testing of the numbers in to its
 * own thing?
 *
 * @param jdString The input string.
 * @returns "area" | "category" | "id" | `false`
 */
export function jdGetAcidTypeFromString(jdString: string): JDAcidType {
  jdString = jdString.trim();

  // Area
  if (/^\d\d-\d\d /.test(jdString)) {
    // Looks like an area
    // 10-19
    // 01234
    if (
      jdString.substring(0, 1) === jdString.substring(3, 4) &&
      jdString.substring(1, 2) === "0" &&
      jdString.substring(4, 5) === "9"
    ) {
      return {
        jdAcidType: "area",
        strict: true,
      };
    } else {
      return {
        jdAcidType: "area",
        strict: false,
      };
    }
  }

  // Category
  if (/^\d\d /.test(jdString)) return "category";

  // Default. False = not a recognised type.
  return {
    jdAcidType: false,
  };
}
