import { useEffect, useState } from "react";
import "./App.css";
import { TestingService } from "./services/testing.service";
import { SnackbarUtilitiesConfig } from "./utilities/snackbar-manager";
import { SnackbarProvider } from "notistack";

function App() {
  const [morty, setMorty] = useState<any>({});

  const fetchMorty = async () => {
    const { data } = await TestingService();
    setMorty(data);
  };

  useEffect(() => {
    fetchMorty();
  }, []);

  return (
    <SnackbarProvider>
      <SnackbarUtilitiesConfig />
      <div className="App">{JSON.stringify(morty, null, 2)}</div>
    </SnackbarProvider>
  );
}

export default App;
