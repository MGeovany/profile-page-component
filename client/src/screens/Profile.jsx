import React, { useEffect, useState } from "react";
import { ScrollView, View } from "react-native";
import {
  Avatar,
  Layout,
  Text,
  Section,
  SectionContent,
  TextInput,
  useTheme,
  RadioButton,
  Picker,
  Button,
} from "react-native-rapi-ui";
import { STATES } from "../config";
import { getUser } from "../lib/profile";
import Loading from "./utils/Loading";
import { getFirmData } from "../lib/firm";

export default function ({ navigation }) {
  const [user, setUser] = useState(null);
  const [firm, setFirm] = useState(null);
  const [email, setEmail] = useState(user?.email || "");
  const [loading, setLoading] = useState(true);
  const { isDarkmode } = useTheme();

  useEffect(() => {
    async function fetchData() {
      try {
        const userData = await getUser();

        if (userData && userData.length > 0) {
          const userRecord = userData[0];
          setUser(userRecord);

          if (userRecord.firm_id) {
            const firmData = await getFirmData(userRecord.firm_id);
            if (firmData && firmData.length > 0) {
              setFirm(firmData[0]);
            }
          }
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        alert("Error: " + error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [navigation]);

  const handleInputChange = (field, val) => {
    setUser({ ...user, [field]: val });
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Layout>
          <ScrollView
            contentContainerStyle={{
              flexGrow: 1,
            }}
          >
            <View
              style={{
                flex: 1,
                alignItems: "center",
              }}
            >
              <Avatar
                source={{ uri: `https://robohash.org/${user?.email}.png` }}
                size="xl"
                shape="round"
                style={{ marginTop: 35 }}
              />
              <Text
                fontWeight="light"
                size="sm"
                style={{ textAlign: "center", marginTop: 10, color: "#acbac7" }}
              >
                Edit
              </Text>
              <Section
                style={{
                  width: "100%",
                  marginTop: 20,
                }}
              >
                <SectionContent>
                  <Text fontWeight="bold" style={{ textAlign: "center" }}>
                    {user?.email}
                  </Text>
                  <Text
                    fontWeight="light"
                    size="lg"
                    style={{
                      textAlign: "center",
                      marginTop: 10,
                      color: "#acbac7",
                    }}
                  >
                    Email
                  </Text>
                </SectionContent>
                <SectionContent>
                  <View
                    style={{
                      alignItems: "left",
                      textAlign: "left",
                      width: "100%",
                    }}
                  >
                    <View
                      style={{
                        textAlign: "left",
                        flexDirection: "column",
                        paddingHorizontal: 10,
                        width: "100%",
                      }}
                    >
                      <View>
                        <Text
                          fontWeight="bold"
                          style={{ textAlign: "left", marginVertical: 20 }}
                        >
                          Contact Information
                        </Text>

                        <View
                          style={{
                            justifyContent: "space-between",
                            width: "100%",
                          }}
                        >
                          <Text
                            style={{
                              marginBottom: 10,
                            }}
                          >
                            Name
                          </Text>
                          <TextInput
                            defaultValue={user?.full_name}
                            placeholder="Please enter your name"
                            onChangeText={(val) =>
                              handleInputChange("full_name", val)
                            }
                            style={{
                              marginBottom: 10,
                              color: "#acbac7",
                            }}
                          />
                        </View>
                      </View>
                      <View>
                        <Text
                          fontWeight="bold"
                          style={{
                            textAlign: "left",
                            marginTop: 40,
                            marginBottom: 20,
                          }}
                        >
                          Registered Investment Adviser with SEC?
                        </Text>
                        <View style={{ flexDirection: "row", width: "100%" }}>
                          <RadioButton
                            style={{ marginRight: 10 }}
                            value={user?.is_registered_with_sec}
                            onValueChange={() =>
                              handleInputChange("is_registered_with_sec", true)
                            }
                            checkedColor={"#333"}
                          />
                          <Text style={{ textAlign: "left", color: "#acbac7" }}>
                            Yes
                          </Text>
                          <RadioButton
                            style={{ marginLeft: 20, marginRight: 10 }}
                            value={!user?.is_registered_with_sec}
                            onValueChange={() =>
                              handleInputChange("is_registered_with_sec", false)
                            }
                            checkedColor={"#333"}
                          />
                          <Text style={{ textAlign: "left", color: "#acbac7" }}>
                            No
                          </Text>
                        </View>
                        {user?.is_registered_with_sec ? (
                          <View>
                            <Text
                              style={{
                                marginTop: 20,
                                marginBottom: 10,
                                color: "#acbac7",
                              }}
                            >
                              Firm Legal Name
                            </Text>
                            <TextInput
                              placeholder="Enter your Firm Legal Name"
                              value={firm?.firm_name}
                              onValueChange={(val) =>
                                handleInputChange("firm_name", val)
                              }
                              style={{
                                color: "#acbac7",
                              }}
                            />
                            <Text
                              style={{
                                marginTop: 20,
                                marginBottom: 10,
                                color: "#acbac7",
                              }}
                            >
                              Firm CRD Number
                            </Text>
                            <TextInput
                              placeholder="Enter your Firm CRD Number"
                              value={firm.firm_crd_number}
                              onValueChange={(val) =>
                                handleInputChange("firm_crd_number", val)
                              }
                              style={{
                                color: "#acbac7",
                              }}
                            />
                            <Text
                              style={{
                                marginTop: 20,
                                marginBottom: 10,
                                color: "#acbac7",
                              }}
                            >
                              State of Business
                            </Text>
                            <Picker
                              items={STATES}
                              value={firm.firm_state}
                              onValueChange={(val) =>
                                handleInputChange("firm_state", val)
                              }
                              placeholder="Choose your state of business"
                            />
                          </View>
                        ) : null}
                      </View>
                      <View>
                        <Text
                          fontWeight="bold"
                          style={{
                            textAlign: "left",
                            marginTop: 40,
                            marginBottom: 20,
                          }}
                        >
                          Individual Adviser?
                        </Text>
                        <View
                          style={{
                            flexDirection: "row",
                            width: "100%",
                          }}
                        >
                          <RadioButton
                            style={{ marginRight: 10 }}
                            value={user?.is_individual}
                            onValueChange={() =>
                              handleInputChange("is_individual", true)
                            }
                            checkedColor={"#333"}
                          />
                          <Text style={{ textAlign: "left", color: "#acbac7" }}>
                            Yes
                          </Text>
                          <RadioButton
                            style={{ marginLeft: 20, marginRight: 10 }}
                            value={!user?.is_individual}
                            onValueChange={() =>
                              handleInputChange("is_individual", false)
                            }
                            checkedColor={"#333"}
                          />
                          <Text style={{ textAlign: "left", color: "#acbac7" }}>
                            No
                          </Text>
                        </View>
                        {user?.is_individual ? (
                          <View>
                            <Text
                              style={{
                                marginTop: 20,
                                marginBottom: 10,
                                color: "#acbac7",
                              }}
                            >
                              FINRA Number
                            </Text>
                            <TextInput
                              placeholder="Enter your Finra Number"
                              value={user?.finra_number}
                              onValueChange={(val) =>
                                handleInputChange("finra_number", val)
                              }
                              style={{
                                color: "#acbac7",
                              }}
                            />
                            <Text
                              style={{
                                marginTop: 20,
                                marginBottom: 10,
                                color: "#acbac7",
                              }}
                            >
                              Phone Number
                            </Text>
                            <TextInput
                              placeholder="Enter your Phone Number"
                              value={user?.phone_number}
                              onValueChange={(val) =>
                                handleInputChange("phone_number", val)
                              }
                              style={{
                                color: "#acbac7",
                              }}
                            />
                          </View>
                        ) : null}
                      </View>
                    </View>
                    <View>
                      <Text
                        fontWeight="bold"
                        style={{
                          textAlign: "left",
                          marginTop: 40,
                          marginBottom: 20,
                        }}
                      >
                        The firm manages assets of clients who are either
                        Qualified Purchasers or Accredited Investors?
                      </Text>
                      <View
                        style={{
                          flexDirection: "row",
                          width: "100%",
                        }}
                      >
                        <RadioButton
                          style={{ marginRight: 10 }}
                          value={user?.firm_manages_assets}
                          onValueChange={() =>
                            handleInputChange("firm_manages_assets", true)
                          }
                          checkedColor={"#333"}
                        />
                        <Text style={{ textAlign: "left", color: "#acbac7" }}>
                          Yes
                        </Text>
                        <RadioButton
                          style={{ marginLeft: 20, marginRight: 10 }}
                          value={!user?.firm_manages_assets}
                          onValueChange={() =>
                            handleInputChange("firm_manages_assets", false)
                          }
                          checkedColor={"#333"}
                        />
                        <Text style={{ textAlign: "left", color: "#acbac7" }}>
                          No
                        </Text>
                      </View>
                    </View>
                    <View
                      style={{
                        marginVertical: 30,
                        flexDirection: "row",
                        justifyContent: "space-evenly",
                        width: "100%",
                      }}
                    >
                      <Button
                        text="Save changes"
                        style={{ backgroundColor: "#3b9c6e" }}
                        color="#3dc286"
                        onPress={() => console.log("Button tapped")}
                      />
                      <Button
                        text="Cancel"
                        status="danger"
                        onPress={() => console.log("Button tapped")}
                      />
                    </View>
                  </View>
                </SectionContent>
              </Section>
            </View>
          </ScrollView>
        </Layout>
      )}
    </>
  );
}
