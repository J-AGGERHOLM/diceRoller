<script>
  import "../src/app.css"
  import { Router, Link, Route, navigate } from "svelte-routing"

  import LogInPage from "./pages/logInPage.svelte";
  import Welcome from "./pages/welcome.svelte";
  import DicePage from "./pages/dicePage.svelte";
  import Admin from "./pages/admin.svelte";
  import Navbar from "./components/Navbar/Navbar.svelte";
  import { fetchGet } from "./util/fetchUtil";
  import toastr from "toastr";
  
  export async function logOut () {
    try {
      const result = await fetchGet("/auth/logout");
      if ( result.ok ) {
        toastr.info(result.data.message, "succes");
        navigate("/");
      }else{
        toastr.warning(result.data.message, "error")
      }
    } catch (error) {
      toastr.warning(error, "error")
    }
  } 
  
</script>

<Router>
  <Navbar onLogOut = {logOut}></Navbar>
  
  <div>
    <Route path="/"><LogInPage/></Route>
    <Route path="/welcome"><Welcome /></Route>
    <Route path="/dicePage"><DicePage></DicePage></Route>
    <Route path="/admin"><Admin /></Route>
  </div>
</Router>

