  Shopify.queryParams = {};
  if (location.search.length) {
    for (var aKeyValue, i = 0, aCouples = location.search.substr(1).split('&'); i < aCouples.length; i++) {
      aKeyValue = aCouples[i].split('=');
      if (aKeyValue.length > 1) {
        Shopify.queryParams[decodeURIComponent(aKeyValue[0])] = decodeURIComponent(aKeyValue[1]);
      }
    }
  }

  $(function() {
    $('#SortBy')
      .val('{{ collection.sort_by | default: collection.default_sort_by }}')
      .bind('change', function() {
        Shopify.queryParams.sort_by = jQuery(this).val();
        location.search = jQuery.param(Shopify.queryParams);
      }
    );
  });
</script>