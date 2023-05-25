import {
  Card,
  Center,
  CardBody,
  CardHeader,
  Heading,
  Text,
  Spinner,
} from "@chakra-ui/react";
import { getFood } from "../../api/getFood";
import { useQuery } from "@tanstack/react-query";
export function FoodList() {
  const { data, isLoading, error, isSuccess } = useQuery(
    ["food"],
    () => getFood(),
    { initialData: { data: "" } }
  );
  return (
    <Center h={"100vh"} justifyContent={"center"}>
      <Card
        size={"md"}
        border={"1px solid #E2E8F0"}
        w={"md"}
        textAlign={"center"}
      >
        <CardHeader>
          <Heading>오늘의 급식</Heading>
        </CardHeader>
        <CardBody>
          {isLoading ? <Spinner></Spinner> : <Text>{data.data["food"]}</Text>}
        </CardBody>
      </Card>
    </Center>
  );
}
