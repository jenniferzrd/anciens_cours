<?php include("inc/header.php");?>
<body class="page-create">
    <a href="index.php" title="Retour à l'accueil" class="fa fa-home"></a>
    <h1 class="title">Ajouter lieux</h1>
    <div class="row">
        <form action="api.php" method="post" class="form create">
            <input class="input" type="text" id="adresse" name="adresse" placeholder="adresse">
            <input class="input" type="text" id="cp" name="cp" placeholder="code postal">
            <input class="input" type="text" id="ville" name="ville" placeholder="ville">
            <input class="input" type="number" id="lati" name="lati" step="any" placeholder="latitude">
            <input class="input" type="number" id="long" name="long" step="any" placeholder="longitude">
            <input id="submit_create" type="submit" name="create_lieux">
        </form>
        <input type="text" id="search_map" class="input search">
        <div id="map" class="map">
            <i id="loader" class="fa fa-cog fa-spin fa-3x fa-fw"></i>
        </div>
    </div>
    <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAJZf5O7E-N0Qk1x23o6OT6qGpnT0SJarU&libraries=places&callback=mapsWidget"></script>
</body>
</html>
