<?php

require 'vendor/autoload.php';

class BookmarkTest extends PHPUnit_Framework_TestCase
{
	public function testIsItEqual(){
		$this->assertEquals(1,1);
	}


	public function testExporterClassCreation(){
		$exporter = new \Bookmark\Export();
		$this->assertInternalType('object', $exporter);
	}

	public function testReadFile(){
		$exporter = new \Bookmark\Export();
		$exporter->readFile("src/Bookmark/Tests/test.json");
		$this->assertInternalType('object', $exporter->getFileContents());
		$this->assertObjectHasAttribute('links', $exporter->getFileContents());
		$c = $exporter->getFileContents();
		$this->assertEquals('testing', $c->name);
	}

	public function testGrabSiteInfo(){
		$exporter = new \Bookmark\Export();
		$exporter->readFile("src/Bookmark/Tests/test.json");
		$exporter->crawlLinks();
		$this->assertInternalType('array', $exporter->getLinkInfo());
		$links = $exporter->getLinkInfo();
		$this->assertEquals('http://www.nerdist.com', $links[0]['url']);
		$this->assertEquals('Nerdist', $links[0]['title']);
	}

	public function testTransformFile(){
		$exporter = new \Bookmark\Export();
		$exporter->readFile("src/Bookmark/Tests/test1.json");
		$exporter->crawlLinks();
		$exporter->transformFile();
		$expectedFileOutput = "<!DOCTYPE NETSCAPE-Bookmark-file-1>\r\n\t\t
		<!-- This is an automatically generated file.
		     It will be read and overwritten.
		     DO NOT EDIT! -->
		<META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=UTF-8\">
		<TITLE>Bookmarks</TITLE>
		<H1>Bookmarks</H1>\n<DL><DT><A HREF=\"http://www.earwolf.com\">Earwolf Podcast Network</A></DL>";
		$this->assertGreaterThan(300, strlen($exporter->getExportedContent()));
	}

	public function testGetFavicon(){
		$exporter = new \Bookmark\Export();
		$exporter->readFile("src/Bookmark/Tests/test.json");
		$exporter->crawlLinks();
		$links = $exporter->getLinkInfo();
		var_dump($links);
		$this->assertEquals('http://www.nerdist.com/wp-content/themes/nerdist/favicon.ico', $links[0]['icon']);
	}

}


?>
