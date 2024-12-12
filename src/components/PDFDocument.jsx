import React from "react";
import { Document, Page, Text, View, StyleSheet, Font } from "@react-pdf/renderer";

// Register Cairo Font
Font.register({
    family: "Tajawal",
    src: "/src/fonts/Tajawal-Regular.ttf", // Ensure this path is accessible or use a CDN-hosted font
});

// Styles
const styles = StyleSheet.create({
    page: {
        padding: 30,
        fontFamily: "Tajawal",
        direction: "rtl", // Right-to-left layout for Arabic
        textAlign: "right",
    },
    header: {
        textAlign: "center",
        fontSize: 20,
        marginBottom: 10,
        fontWeight: "bold",
    },
    secondHeader: {
        textAlign: "center",
        fontSize: 16,
        marginBottom: 10,
        fontWeight: "bold",
    },
    sectionTitle: {
        fontSize: 12,
        marginVertical: 2,
        fontWeight: "bold",
        textDecoration: "underline",
    },
    section: {
        marginBottom: 20,
    },
    label: {
        fontWeight: "bold",
        fontSize: 8,
    },
    value: {
        fontSize: 8,
        marginBottom: 5,
    },
    list: {
        marginVertical: 10,
        paddingRight: 15,
    },
    listItem: {
        fontSize: 8,
        marginBottom: 5,
    },
    listItemRed: {
        fontSize: 12,
        marginBottom: 5,
        color: "red"
    },
    footer: {
        marginTop: 20,
        fontSize: 8,
    },
    signature: {
        marginTop: 10,
    },
    signatureItem: {
        fontSize: 8,
    },
});

// Component
const PDFDocument = () => {
    const registrationData = JSON.parse(localStorage.getItem("registrationData")) || {};
    const reservationData = JSON.parse(localStorage.getItem("reservationData")) || {};

    return (
        <Document>
            <Page style={styles.page}>
                {/* Header */}
                <Text style={styles.header}>استمارة حجز الوحدات السكنية للأفراد</Text>

                {/* Client Information */}
                <Text style={styles.sectionTitle}>:بيانات العميل</Text>
                <View style={styles.section}>
                    <Text style={styles.label}>الاسم:{registrationData.fullName || "غير متوفر"}</Text>

                    <Text style={styles.label}>{registrationData.nationalId || "غير متوفر"}:الرقم القومي</Text>

                    <Text style={styles.label}>{registrationData.email || "غير متوفر"}:البريد الإلكتروني</Text>

                    <Text style={styles.label}>{registrationData.phone || "غير متوفر"}:رقم الهاتف</Text>
                </View>

                {/* Unit Information */}
                <Text style={styles.sectionTitle}>:بيانات الوحدة</Text>
                <View style={styles.section}>
                    <Text style={styles.label}>{reservationData.city || "غير متوفر"}:المدينة</Text>

                    <Text style={styles.label}>{reservationData.project || "غير متوفر"}:المشروع</Text>

                    <Text style={styles.label}>{reservationData.floor || "غير متوفر"}:الدور</Text>

                    <Text style={styles.label}>{reservationData.code ? `${reservationData.code} جنيه` : "غير متوفر"}: كود الحجز</Text>
                    <Text style={styles.label}>{reservationData.price ? `${reservationData.price} جنيه` : "غير متوفر"}:قيمة الحجز</Text>

                </View>

                {/* Declarations Section */}
                <Text style={styles.secondHeader}>التعهدات والإقرارات</Text>
                <View style={styles.section}>
                    <View style={styles.list}>
                        <Text style={styles.listItem}> .أتعهد بصحة البيانات المدخلة في هذه الاستمارة•</Text>
                        <Text style={styles.listItem}>
                            .أقر بالالتزام بجميع الشروط والقوانين المتعلقة بالحجز•
                        </Text>
                        <Text style={styles.listItem}>
                            . في حالة إدخال بيانات خاطئة، أتحمل كافة العواقب القانونية •
                        </Text>
                        <Text style={styles.listItemRed}>
                            في حالة تقدیم العمیل أي بیانات خاطئة(اسم العمیل رباعي - الرقم القومي - رقم فوري المرجعي - رقم كود الحجز- رقم الموبایل المسجل على الموقع - رقم الحساب
                            المصرفي الدولي IBAN اذا كان طریقة الدفع تحویل بنكي ACH ... (سیتم استبعاده من الحجز ورد المبالغ المدفوعة
                        </Text>
                    </View>
                    <View style={styles.signature}>
                        <Text style={styles.signatureItem}>الاسم:{registrationData.fullName || "غير متوفر"}</Text>
                        <Text style={styles.signatureItem}>:التوقيع</Text>
                    </View>
                </View>

            </Page>
        </Document>
    );
};

export default PDFDocument;
