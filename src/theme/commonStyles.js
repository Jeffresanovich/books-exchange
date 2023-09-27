export const themeColors = {
  heavyBlue: "#65A6F6",
  mediumBlue: "#9AC4F8",
  lightBlue: "#C5DEFB",
};

//Header Style
export const headerStyles = {
  headerShown: true,
  headerStyle: {
    backgroundColor: themeColors.mediumBlue,
  },
  headerTintColor: "white",
  headerBackTitle: "Back",
  headerTitleAlign: "center",
};

/**
 *
 * @param {string} justifyContent "center"||"flex-end"||"flex-start"||"space-around"||"space-between"||"space-evenly"
 * @param {string} alignItems "center"||"flex-end"||"flex-start"||"baseline"||"stretch"
 * @param {string} flexDirectionColumn row||row-reverse||column||column-reverse
 * @returns
 */
export const flex = (
  justifyContent = "center",
  alignItems = "center",
  flexDirectionColumn = "row"
) => ({
  justifyContent: justifyContent,
  alignItems: alignItems,
  flexDirection: flexDirectionColumn,
});

/**
 *
 * @param {number} width default = 1
 * @param {string} colors default = black
 * @param {number} radius default = 0
 * @returns
 */
export const border = (width = 1, colors = "black", radius = 0) => ({
  borderWidth: width,
  borderColor: colors,
  borderRadius: radius,
});
