import React, { useState, useCallback } from "react";
import {
  TouchableOpacity,
  View,
  Text,
  Image,
  ScrollView,
  StatusBar,
} from "react-native";
import { Appbar } from "react-native-paper";
import { styles } from "./SavedTemplatesScreenStyles";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useFocusEffect } from "@react-navigation/native";
import AxiosInstance from "../../../AxiosInstance";
import Headersection from "../../../components/Headersection";

const CustomEditIcon = (props) => {
  <MaterialCommunityIcons
    {...props}
    name="square-edit-outline"
    size={25}
    color="#65676B"
  />;
};
const CustomDeleteIcon = (props) => (
  <MaterialCommunityIcons
    {...props}
    name="trash-can-outline"
    size={25}
    color="#65676B"
  />
);

const SavedTemplatesScreen = ({ navigation }) => {
  const [templates, setTemplates] = useState([]);

  const fetchData = () => {
    console.log("calling api to get all templates...");
    AxiosInstance.get(`/api/auth/mapTemplate/getAllTemplates`)
      .then((response) => {
        setTemplates(response.data);
        console.log("fetching successful");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useFocusEffect(
    useCallback(() => {
      fetchData();
    }, [])
  );

  const handleDelete = (deletingTemplate) => {
    AxiosInstance.delete(
      `/api/auth/mapTemplate/deleteTemplate/${deletingTemplate._id}`
    )
      .then((response) => {
        /* console.log(response); */
        alert("Template deleted");
        setTemplates(
          templates.filter((template) => template._id !== deletingTemplate._id)
        );
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleTemplatePress = (item) => {
    console.log("template pressed");
    navigation.navigate("TemplateView", { item: item });
  };

  return (
    <>
      <View>
        {/* Static section at the top */}
        <StatusBar barStyle="light-content" backgroundColor="#007BFF" />

        {/*Header section*/}
        <Headersection navigation={navigation} title="Saved Templates" />
      </View>
      <View style={styles.low_outer}>
        {/* template */}
        <View style={styles.scrollViewOuterStyle}>
          <ScrollView
            style={{ flex: 1 }}
            contentContainerStyle={{ paddingBottom: 20 }}
          >
            {templates.map((item, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  onPress={() => handleTemplatePress(item)}
                >
                  <View style={styles.template_style}>
                    <View style={styles.col_01}>
                      <Image
                        style={styles.image_style}
                        source={{
                          uri: "https://i.pcmag.com/imagery/articles/01IB0rgNa4lGMBlmLyi0VP6-6..v1611346416.png",
                        }}
                      />
                    </View>
                    <TouchableOpacity onPress={() => handleTemplatePress(item)}>
                      <View style={styles.col_02}>
                        <Text style={styles.bold_text}>
                          {item.templateName}
                        </Text>
                        <Text style={styles.sub_text_style}>
                          Location: {item.location}
                        </Text>
                        <Text style={styles.sub_text_style}>
                          Date: {item.date}{" "}
                        </Text>
                        <Text style={styles.sub_text_style}>
                          Time: {item.time}
                        </Text>
                      </View>
                    </TouchableOpacity>
                    <View style={styles.col_03}>
                      <TouchableOpacity
                        onPress={() => {
                          navigation.navigate("EditTemplate", { item: item });
                        }}
                      >
                        <MaterialCommunityIcons
                          name="square-edit-outline"
                          size={25}
                          color="#65676B"
                        />
                      </TouchableOpacity>

                      <CustomDeleteIcon onPress={() => handleDelete(item)} />
                    </View>
                  </View>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </View>
      </View>
    </>
  );
};

export default SavedTemplatesScreen;