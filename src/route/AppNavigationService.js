let myNavigator;

function setTopLevelNavigator(navigatorRef) {
  myNavigator = navigatorRef;
}

function navigate(name, params) {
  if (myNavigator && myNavigator.isReady()) {
    myNavigator.navigate(name, params);
  }
}

function goBack() {
  if (myNavigator && myNavigator.isReady()) {
    myNavigator.goBack();
  }
}

function getCurrentRoute() {
  if (myNavigator && myNavigator.isReady()) {
    const currentRoute = myNavigator.getCurrentRoute();
    console.log(
      `[NavigationService] Current Route: ${JSON.stringify(currentRoute)}`,
    );
    return currentRoute?.name || null;
  }
}

export default {
  navigate,
  goBack,
  setTopLevelNavigator,
  getCurrentRoute,
};
