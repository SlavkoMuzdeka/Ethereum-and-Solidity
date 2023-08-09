import "./App.css";
import lottery from "./lottery";
import { useState, useEffect } from "react";
import web3 from "./web3";
import { Form, Button, InputNumber } from "antd";

function App() {
  const [manager, setManager] = useState("");
  const [players, setPlayers] = useState([]);
  const [balance, setBalance] = useState("");
  const [value, setValue] = useState("");
  const [message, setMessage] = useState("");
  const [form] = Form.useForm();

  useEffect(() => {
    lottery.methods
      .manager()
      .call()
      .then((manager) => setManager(manager));
    lottery.methods
      .getPlayers()
      .call()
      .then((players) => setPlayers(players));
    web3.eth
      .getBalance(lottery.options.address)
      .then((balance) => setBalance(balance));
  }, []);

  const onSubmit = async (event) => {
    event.preventDefault();

    const accounts = await web3.eth.getAccounts();

    setMessage("Waiting on transaction success...");

    await lottery.methods.enter().send({
      from: accounts[0],
      value: web3.utils.toWei(value, "wei"),
    });

    setMessage("You have been entered...");
  };

  const pickWinner = async () => {
    const accounts = await web3.eth.getAccounts();

    setMessage("Waiting on transaction success...");

    await lottery.methods.pickWinner().send({
      from: accounts[0],
    });

    setMessage("A winner has been picked!");
  };

  return (
    <div>
      <h2>Lottery Contract</h2>
      <p>This contract is managed by {manager} </p>
      <p>
        There are currently {players.length} people entered, competing to win{" "}
        {web3.utils.fromWei(balance, "ether")} ether!
      </p>
      <hr />
      <h4>Want to try your luck?</h4>
      <Form form={form} onSubmit>
        <Form.Item
          name="ether"
          rules={[{ required: true, message: "You must enter a value" }]}
          label="Amount of ether to enter"
        >
          <InputNumber
            min={0}
            value={value}
            onChange={(value) => setValue(value)}
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" onClick={onSubmit}>
            Enter
          </Button>
        </Form.Item>
      </Form>
      <hr />

      <h4>Ready to pick a winner?</h4>
      <Button type="primary" onClick={pickWinner}>
        Pick Winner
      </Button>
      <hr />

      <h1>{message}</h1>
    </div>
  );
}

export default App;
