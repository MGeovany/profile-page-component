import React from "react";
import { ScrollView, View } from "react-native";
import {
  Avatar,
  Layout,
  Text,
  Section,
  SectionContent,
  SectionImage,
  TextInput,
  useTheme,
  themeColor,
  RadioButton,
  Picker,
  Button,
} from "react-native-rapi-ui";
import { STATES } from "../config";

export default function ({ navigation }) {
  const { isDarkmode } = useTheme();

  return (
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
            source={{ uri: "https://robohash.org/randoms.png" }}
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
                M Geovany Castro
              </Text>
              <Text
                fontWeight="light"
                size="lg"
                italic={true}
                style={{ textAlign: "center", marginTop: 10, color: "#acbac7" }}
              >
                Software Engineer
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
                          color: "#acbac7",
                        }}
                      >
                        Email
                      </Text>
                      <TextInput
                        placeholder="Enter your Firm Legal Name"
                        value="marlongeo1999@gmail.com"
                        style={{
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
                    <View
                      style={{
                        flexDirection: "row",
                        width: "100%",
                      }}
                    >
                      <RadioButton
                        style={{ marginRight: 10 }}
                        value={true}
                        checkedColor={"#333"}
                      />
                      <Text style={{ textAlign: "left", color: "#acbac7" }}>
                        Yes
                      </Text>
                      <RadioButton
                        style={{ marginLeft: 20, marginRight: 10 }}
                      />
                      <Text style={{ textAlign: "left", color: "#acbac7" }}>
                        No
                      </Text>
                    </View>
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
                      value="Marlon.co"
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
                      value="0501-1020"
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
                      placeholder="Choose your state of business"
                    />
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
                        value={true}
                        checkedColor={"#333"}
                      />
                      <Text style={{ textAlign: "left", color: "#acbac7" }}>
                        Yes
                      </Text>
                      <RadioButton
                        style={{ marginLeft: 20, marginRight: 10 }}
                      />
                      <Text style={{ textAlign: "left", color: "#acbac7" }}>
                        No
                      </Text>
                    </View>
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
                      value="53335-3535-34"
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
                      value="2133213"
                      style={{
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
                    The firm manages assets of clients who are either Qualified
                    Purchasers or Accredited Investors?
                  </Text>
                  <View
                    style={{
                      flexDirection: "row",
                      width: "100%",
                    }}
                  >
                    <RadioButton
                      style={{ marginRight: 10 }}
                      value={true}
                      checkedColor={"#333"}
                    />
                    <Text style={{ textAlign: "left", color: "#acbac7" }}>
                      Yes
                    </Text>
                    <RadioButton style={{ marginLeft: 20, marginRight: 10 }} />
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
  );
}
