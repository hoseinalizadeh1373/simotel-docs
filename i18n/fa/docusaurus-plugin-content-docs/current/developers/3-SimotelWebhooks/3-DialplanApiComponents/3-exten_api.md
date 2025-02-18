---
sidebar_position: 2
sidebar_label: "معرفی Extension API"
title: "Extension API"
---


# Extention API

از این کامپوننت برای ارسال تماس به سمت یک داخلی استفاده‌ می‌شود. عملکرد آن مشابه Extension است، با این تفاوت که از طریق وب‌‌ سرویس، شماره داخلی 
مقصد را دریافت و فقط تماس را برای آن داخلی ارسال می‌نماید.

## پارامترها کامپوننت

- **API Address**: آدرس وب‌‌ سرویس برای اطلاع از شماره داخلی مقصد.
- **Timeout (sec)**: مدت زمان زنگ خوردن داخلی (برحسب ثانیه).
- **Options**: تنظيمات تماس.
 
## خروجی‌های کامپوننت

- **S (Success)**: درصورتی‌‌ که تماس موفق باشد، یعنی داخلی به تماس پاسخ داده باشد.
- **B (Busy)**: در صورتی که داخلی مشغول باشد.
- **F (Fail)**: درصورتی‌‌که تماس به هر دلیلی ناموفق باشد.

## قالب وب‌‌سرویس
با‌توجه به مقادیر منوی تنظیمات مربوط به `API Method & API Version`، کامپوننت آدرس وب‌ سرویس را فراخوانی کرده و داده‌های زیر را (با نام‌های ذکر شده) همراه با آن ارسال می‌نماید.

- **src**: شماره تماس‌‌گیرنده (Caller یا CID).
- **dst**: شماره وارد شده (Callee یا DID یا Exten).
- **data**: داده‌‌ای که تماس‌‌گیرنده در مسیر تماس وارد کرده است (مثلاً داده‌‌ای که در IVR وارد کرده است).
- **unique_id**: شناسه یکتای تماس.
- **app_name**: نام کامپوننت جاری.

و در جواب، خروجی زیر را به‌صورت json دریافت‌ می‌کند.

```shell
{
  "ok": "1",
  "extension": "120"
}
```

**و درنهايت تماس را به سمت داخلی واردشده (در اينجا 120) ارسال می‌كند.**