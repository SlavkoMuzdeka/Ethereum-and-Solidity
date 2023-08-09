import React from "react";
import Layout from "../../components/Layout";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Campaign from "../../ethereum/campaign";
import { Card, Grid, Button, GridColumn } from "semantic-ui-react";
import web3 from "../../ethereum/web3";
import ContributeForm from "../../components/ContributeForm";
import { Link } from "../../routes";

const Show = () => {
  const router = useRouter();
  const [summary, setSummary] = useState({
    minimumContribution: "",
    balance: "",
    requestsCount: "",
    approversCount: "",
    manager: "",
  });

  useEffect(() => {
    const campaign = Campaign(router.query.address);
    campaign.methods
      .getSummary()
      .call()
      .then((res) => {
        setSummary({
          minimumContribution: Number(res[0]),
          balance: Number(res[1]),
          requestsCount: Number(res[2]),
          approversCount: Number(res[3]),
          manager: res[4],
        });
      });
  }, []);

  const renderCards = () => {
    const items = [
      {
        header: summary.manager,
        meta: "Address of Manager",
        style: { overflowWrap: "break-word" },
        description:
          "The manager created this campaign and can create requests to withdraw money",
      },
      {
        header: summary.minimumContribution,
        meta: "Minimum Contribution (wei)",
        description:
          "You must contribute at least this much wei to become an approver",
      },
      {
        header: summary.requestsCount,
        meta: "Number of Requests",
        description:
          "A request tries to withdraw money from the contract. Request must be approved by approvers",
      },
      {
        header: summary.approversCount,
        meta: "Number of Approvers",
        description:
          "Number of people who have already donated to this compaign",
      },
      {
        header: web3.utils.fromWei(summary.balance, "ether"),
        meta: "Campaign Balance (ether)",
        description:
          "The balance is how much money this campaign has left to spend.",
      },
    ];
    return <Card.Group items={items} />;
  };

  return (
    <Layout>
      <h3>Campaign Show</h3>
      <Grid>
        <Grid.Row>
          <Grid.Column width={10}>{renderCards()}</Grid.Column>
          <Grid.Column width={6}>
            <ContributeForm address={router.query.address} />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <Link route={`/campaigns/${router.query.address}/requests`}>
              <a>
                <Button primary>View Request</Button>
              </a>
            </Link>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Layout>
  );
};

export default Show;
