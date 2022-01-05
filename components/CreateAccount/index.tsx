import React, { useState, useEffect, ReactElement } from "react";
import { Button } from "antd";
import Link from "next/link";
import { WalletOutlined, LoadingOutlined } from "@ant-design/icons";
import { Card } from "../../styles/StyledComponents.styles";

const CreateAccount = (): ReactElement => {
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(false);
  }, []);

  const handleGenerate = () => {
    setLoading(true);
  };

  return (
    <Card>
      <WalletOutlined
        style={{ fontSize: "3rem", margin: "2rem 0", display: "block" }}
      />
    <h2>New to Substrate Wallet?</h2>
    <p>
      Create a new account and receive first tokens
    </p>

    <div className={"buttons"}>
        {!loading && (
          <Link href={`/generate`} passHref>
            <Button type="primary" onClick={handleGenerate}>
              Create New Wallet
            </Button>
          </Link>
        )}
        {loading && (
          <Button className={"disabledButton"} disabled>
            <LoadingOutlined spin />
          </Button>
        )}
      </div>
    </Card>
  )
};

export default CreateAccount;
