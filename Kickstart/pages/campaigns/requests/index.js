import React, { useState, useEffect } from "react";
import Layout from "../../../components/Layout";
import { Button, Table } from "semantic-ui-react";
import { Link } from "../../../routes";
import { useRouter } from "next/router";
import Campaign from "../../../ethereum/campaign";
import RequestRow from "../../../components/RequestRow";

const RequestIndex = () => {
  const { Header, Row, HeaderCell, Body } = Table;
  const router = useRouter();
  const [requests, setRequests] = useState([]);
  const [requestCount, setRequestCount] = useState("");
  const [approversCount, setApproversCount] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const campaign = Campaign(router.query.address);
      const newRequestCount = await campaign.methods.getRequestsCount().call();
      setRequestCount(newRequestCount);
      const newApproversCount = await campaign.methods.approversCount().call();
      setApproversCount(newApproversCount);
      const newRequests = await Promise.all(
        Array(parseInt(newRequestCount))
          .fill()
          .map(async (element, index) => {
            return await campaign.methods.requests(index).call();
          })
      );
      setRequests(newRequests);
    };
    fetchData();
  }, []);

  const renderRows = () => {
    return requests.map((request, index) => {
      return (
        <RequestRow
          key={index}
          request={request}
          id={index}
          address={router.query.address}
          approversCount={approversCount}
        />
      );
    });
  };

  return (
    <Layout>
      <h3>Requests</h3>
      <Link route={`/campaigns/${router.query.address}/requests/new`}>
        <a>
          <Button primary floated="right" style={{ marginBottom: 10 }}>
            Add request
          </Button>
        </a>
      </Link>
      <Table>
        <Header>
          <Row>
            <HeaderCell>ID</HeaderCell>
            <HeaderCell>Description</HeaderCell>
            <HeaderCell>Amount</HeaderCell>
            <HeaderCell>Recipient</HeaderCell>
            <HeaderCell>Approval Count</HeaderCell>
            <HeaderCell>Approve</HeaderCell>
            <HeaderCell>Finalize</HeaderCell>
          </Row>
        </Header>
        <Body>{renderRows()}</Body>
      </Table>
      <div>Found {requestCount} requests.</div>
    </Layout>
  );
};

export default RequestIndex;
