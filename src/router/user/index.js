export default {
  path: "/user",
  component: () => import("@/views/User"),
  children: [
    {
      path: "login",
      component: () => import("@/views/User/Login")
    },
    {
      path: "enroll",
      component: () => import("@/views/User/Enroll")
    },
    {
      path: "/user",
      redirect: "/user/login"
    }
  ]
};
