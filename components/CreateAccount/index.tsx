import React, { useState, useEffect, ReactElement } from "react";
import { Button } from "antd";
import Link from "next/link";
import { BankOutlined, LoadingOutlined } from "@ant-design/icons";
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
    <>
    <p>test</p>
    </>
  )
};

export default CreateAccount;
