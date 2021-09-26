<?php

/**
 * Sitemap generator
 *
 * Resources
 * https://www.php.net/manual/en/class.directoryiterator.php
 * https://developers.google.com/search/docs/advanced/sitemaps/build-sitemap
 */

define("PATH", dirname(__FILE__));
define("CONTENT", array("ydelser", "om", "oekonomi", "metodik"));

header("Content-type: application/xml");

echo "<?xml version=\"1.0\" encoding=\"UTF-8\"?>";
echo "<urlset xmlns=\"http://www.sitemaps.org/schemas/sitemap/0.9\">";

foreach (new DirectoryIterator(PATH) as $file_info) {
    // Skip the . .. files
    if (in_array($file_info->getFilename(), CONTENT)) {
        echo sprintf("<url><loc>https://ladehoffmanagement.dk/%s/</loc><lastmod>%s</lastmod></url>",
            $file_info->getFilename(),
            date("Y-m-d", $file_info->getATime())
        );
    }
}

echo "</urlset>";
