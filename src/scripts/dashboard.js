import ComponentsDom from "../controllers/homepage.controller.js";
import DashBoardComponents from "../controllers/dashboard.controller.js"

ComponentsDom.header()
DashBoardComponents.filtersDashboard()
DashBoardComponents.profile()
DashBoardComponents.renderAdoptedPets()

console.log(DashBoardComponents.user)
