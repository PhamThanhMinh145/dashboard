import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import { Navbar, Sidebar, ThemeSetting } from "./components";

import { Home } from "./pages";

import { useStateContext } from "./contexts/ContextProvider";
import ListEmployees from "./pages/Employees/ListEmployees";
import EditEmployee from "./pages/Employees/EditEmployee";
import ListCustomers from "./pages/Customers/ListCustomers";
import ListBook from "./pages/Books/listBook";
import ListAuthor from "./pages/Authors/ListAuthor";
import ListPublisher from "./pages/Publishers/ListPublisher";
import ListField from "./pages/Fields/ListField";
import ListOrders from "./pages/Orders/ListOrders";
import Single from "./pages/Customers/Single";
import NewPublisher from "./pages/Authors/NewAuthor";
import { userInputsPublisher } from "./data/formSource";
import NewTest from "./pages/Employees/NewTest";
import BookForm from "./pages/Books/BookForm";
import BookFormUpdate from './pages/Books/BookFormUpdate'
// import SignInConnect from "./pages/SignIn/SignInConnect";
import Login from "./pages/SignIn/Login";
import AuthService from "./services/auth.service";

const App = () => {
  const {
    activeMenu,
    themeSettings,
    setThemeSettings,
    currentColor,
    currentMode,
  } = useStateContext();

  const user = AuthService.getCurrentUser();
  // const [staff, setStaff] = useState(false);
  // const [admin, setAdmin] = useState(false);
  // const [currentUser, setCurrentUser] = useState(undefined);

  // useEffect(() => {

  //   if (user) {
  //     setCurrentUser(user);
  //     setStaff(user.roleID == 2);
  //     setAdmin(user.roleID == 1);
  //   }
  // });

  return (
    <>
      {!user && (
        <BrowserRouter>
          <Routes path="/">
            <Route index element={<Login />} />
            <Route path="login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      )}

      {user && (user.role === "Admin" || user.role === "Staff") && (
        <div className={currentMode === "Dark" ? "dark" : ""}>
          <BrowserRouter>
            <div className="flex relative dark:bg-main-dark-bg">
              <div
                className="fixed right-4 bottom-4"
                style={{ zIndex: "1000" }}
              >
                <TooltipComponent content="Settings" position="Top">
                  <button
                    type="button"
                    className="text-2xl p-2 hover:drop-shadow-xl hover:bg-light-gray text-white"
                    onClick={() => setThemeSettings(true)}
                    style={{ background: currentColor, borderRadius: "50%" }}
                  >
                    <FiSettings />
                  </button>
                </TooltipComponent>
              </div>

              {activeMenu ? (
                <div
                  className="w-72 fixed sidebar dark:bg-secondary-dark-bg
               bg-white"
                >
                  <Sidebar />
                </div>
              ) : (
                <div className="w-0 dark:bg-secondary-dark-bg">
                  <Sidebar />
                </div>
              )}
              <div
                className={`dark:bg-main-dark-bg bg-main-bg min-h-screen w-full 
              ${activeMenu ? "md:ml-72" : "flex-2"}`}
              >
                <div
                  className="fixed md:static bg-main-bg 
              dark:bg-main-dark-bg navbar "
                >
                  <Navbar />
                </div>

                <div>
                  {themeSettings && <ThemeSetting />}
                  <Routes>
                    {/*Dashboard */}

                    <Route path="/">
                      <Route index element={<Home />} />
                      <Route path="home" element={<Home />} />
                    </Route>

                    {/* Accounts */}
                    <Route path="employee">
                      <Route index element={<ListEmployees />} />
                      <Route
                        path="new"
                        element={<NewTest title="Add new Employee" />}
                      />
                      <Route path=":userId" element={<EditEmployee />} />
                    </Route>

                    <Route path="customer">
                      <Route index element={<ListCustomers />} />
                      <Route path=":userId" element={<Single />} />
                    </Route>

                    {/* Products */}
                    <Route path="books">
                      <Route index element={<ListBook />} />
                      <Route
                        path="newbook"
                        element={<BookForm title="Add new Book" />}
                      />

                      <Route
                        path=":bookID"
                        element={<BookFormUpdate title="Update new Book" />}
                      />
                    </Route>

                    <Route path="authors">
                      <Route index element={<ListAuthor />} />
                    </Route>

                    <Route path="publishers">
                      <Route index element={<ListPublisher />} />
                      <Route
                        path="new"
                        element={
                          <NewPublisher
                            inputs={userInputsPublisher}
                            title="Add new Publisher"
                          />
                        }
                      />
                      <Route path=":userId" element={<Single />} />
                    </Route>

                    <Route path="Fields">
                      <Route index element={<ListField />} />
                    </Route>

                    {/* Sales */}

                    <Route path="orders">
                      <Route index element={<ListOrders />} />
                    </Route>
                  </Routes>
                </div>
              </div>
            </div>
          </BrowserRouter>
        </div>
      )}
    </>
  );
};

export default App;
