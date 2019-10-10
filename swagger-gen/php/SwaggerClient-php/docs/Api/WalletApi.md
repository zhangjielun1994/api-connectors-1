# Swagger\Client\WalletApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**walletGetRecords**](WalletApi.md#walletGetRecords) | **GET** /open-api/wallet/fund/records | Get wallet fund records


# **walletGetRecords**
> object walletGetRecords($start_date, $end_date, $currency, $wallet_fund_type, $page, $limit)

Get wallet fund records

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\WalletApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$start_date = "start_date_example"; // string | Start point for result
$end_date = "end_date_example"; // string | End point for result
$currency = "currency_example"; // string | Currency type
$wallet_fund_type = "wallet_fund_type_example"; // string | wallet fund type
$page = "page_example"; // string | Page. Default getting first page data
$limit = "limit_example"; // string | Limit for data size per page, max size is 50. Default as showing 20 pieces of data per page

try {
    $result = $apiInstance->walletGetRecords($start_date, $end_date, $currency, $wallet_fund_type, $page, $limit);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling WalletApi->walletGetRecords: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **start_date** | **string**| Start point for result | [optional]
 **end_date** | **string**| End point for result | [optional]
 **currency** | **string**| Currency type | [optional]
 **wallet_fund_type** | **string**| wallet fund type | [optional]
 **page** | **string**| Page. Default getting first page data | [optional]
 **limit** | **string**| Limit for data size per page, max size is 50. Default as showing 20 pieces of data per page | [optional]

### Return type

**object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)
