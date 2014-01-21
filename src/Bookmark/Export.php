<?php
namespace Bookmark;

use \jyggen\Curl as Curl;
use \Sunra\PhpSimple\HtmlDomParser;

class Export
{

	protected $file_content;

	protected $exported_content;

	protected $link_array;

	public function __construct(){
	}

	public function readFile($file){
		
		$this->file_content = json_decode(file_get_contents($file));

	}

	public function getFileContents(){
		return $this->file_content;
	}

	protected function getResponse($link){
		$req = new Curl\Request($link);
		$req->execute();
		$res = $req->getResponse();
		if($res->isOk()){
			return $res->getContent(); 
		}else{
			trigger_error("Request failed");
		}
	}

	public function crawlLinks(){
		$i = 0;
		foreach($this->file_content->links as $link){
			$body = $this->getResponse($link);
			$dom = HtmlDomParser::str_get_html($body);
			$this->link_array[$i]['url'] = $link;
			$title = $dom->find('title'); 
			$this->link_array[$i]['title'] = trim($title[0]->plaintext);

			$icon = $dom->find("link[rel='shortcut icon']");
			if(count($icon) >= 1){
			$this->link_array[$i]['icon'] = $icon[0]->attr['href'];
			}else{
				$this->link_array[$i]['icon'] = '';
			}
			$i++;
		}

		return;
	}


	public function getLinkInfo(){
		return $this->link_array;
	}


	public function transformFile(){
		$this->addFileHeader();
		$this->loopLinks();
		$this->addFileFooter();
	}

	public function getExportedContent(){
		return $this->exported_content;
	}	

	protected function addFileHeader(){
		$date = time();
		$header = "<!DOCTYPE NETSCAPE-Bookmark-file-1>
		<!-- This is an automatically generated file.
		     It will be read and overwritten.
		     DO NOT EDIT! -->
		<META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=UTF-8\">
		<TITLE>Bookmarks</TITLE>
		<H1>Bookmarks</H1>
		<DL>
		<DT><H3 ADD_DATE=\"{$date}\">{$this->file_content->name}</H3>\r\n";
		$this->exported_content = $header;
	}

	protected function loopLinks(){
		$this->exported_content .= "<DL><p>\r\n";
		foreach($this->link_array as $link){
			$this->exported_content .= "\t\t<DT><A HREF=\"{$link['url']}\" ICON=\"{$link['icon']}\">{$link['title']}</A>\r\n"; 
		}
				$this->exported_content .= "</DL><p>";

		return true;
	}

	protected function addFileFooter(){
		$this->exported_content .= "</DL>";
	}

}








?>