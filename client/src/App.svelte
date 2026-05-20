<script>
  import '../src/app.css';
  import { Router, Route } from 'svelte-routing';

  import LogInPage from './pages/logInPage.svelte';
  import Overview from './pages/overviewPage.svelte';
  import DicePage from './pages/dicePage.svelte';
  import Admin from './pages/admin.svelte';
  import Navbar from './components/Navbar/Navbar.svelte';
  import toastr from 'toastr';
  import 'toastr/build/toastr.min.css';

  toastr.options = {
    positionClass: 'toast-bottom-right',
    progressBar: true,
    closeButton: true,
  };

  
</script>

<Router>
  <div>
    <Route path="/">
      <LogInPage /></Route
    >
    <Route path="/overview">
      <Navbar></Navbar>
      <Overview /></Route
    >
    <Route path="/dicePage">
      <Navbar></Navbar>
      <DicePage></DicePage></Route
    >
    <Route path="/admin">
      <Navbar></Navbar>
      <Admin /></Route
    >
  </div>
</Router>
