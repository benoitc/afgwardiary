

function initialize_map() {
	var latlng = new google.maps.LatLng( 32.68331909, 69.41610718 );
	var myOptions = {
		zoom: 16,
		center: latlng,
		mapTypeId: google.maps.MapTypeId.HYBRID,
		scrollwheel: false
	};

	var o = document.getElementById( 'mapOverlay' );
	o.style['background'] = 'none';
	window.map = new google.maps.Map( o, myOptions );

marker = new google.maps.Marker({ position: new google.maps.LatLng( 31.51361084, 65.43776703 ), map: window.map, title: '(FRIENDLY ACTION) MEDEVAC RPT   CJSOTF-A : 1 CF KIA 1 CF WIA 4 HNSF KIA 3 HNSF WIA 181 UE KIA 1 UE WIA'});
google.maps.event.addListener(marker, 'click', function( ){ document.location.href = '/afg/event/2006/09/AFG20060909n389.html'; });

marker = new google.maps.Marker({ position: new google.maps.LatLng( 34.52786636, 69.16671753 ), map: window.map, title: '(EXPLOSIVE HAZARD) IED EXPLOSION RPT  (SVBIED) RC CAPITAL : 42 CIV KIA 147 CIV WIA 1 UE KIA'});
google.maps.event.addListener(marker, 'click', function( ){ document.location.href = '/afg/event/2008/07/AFG20080707n1425.html'; });

marker = new google.maps.Marker({ position: new google.maps.LatLng( 32.45000839, 66.35440063 ), map: window.map, title: 'DIRECT FIRE CF ANA CIV Deh Chopan 6 CF WIA 2 CIV WIA 1 ANA KIA 3 ANA WIA'});
google.maps.event.addListener(marker, 'click', function( ){ document.location.href = '/afg/event/2005/06/AFG20050621n88.html'; });

marker = new google.maps.Marker({ position: new google.maps.LatLng( 31.610466, 65.69447327 ), map: window.map, title: '(EXPLOSIVE HAZARD) IED EXPLOSION RPT  (SVBIED) ANP HQ IVO  (ROUTE STADIUM): 47 CIV KIA 70 CIV WIA'});
google.maps.event.addListener(marker, 'click', function( ){ document.location.href = '/afg/event/2009/08/AFG20090825n1935.html'; });

marker = new google.maps.Marker({ position: new google.maps.LatLng( 31.61611938, 65.63436127 ), map: window.map, title: '(EXPLOSIVE HAZARD) IED EXPLOSION RPT  (PBIED) CJTF-82 : 55 CIV KIA 48 CIV WIA 1 UE KIA'});
google.maps.event.addListener(marker, 'click', function( ){ document.location.href = '/afg/event/2008/02/AFG20080217n1231.html'; });

marker = new google.maps.Marker({ position: new google.maps.LatLng( 32.10612106, 66.16013336 ), map: window.map, title: 'D2 280413Z TF BUSHMASTER DF TIV IVO FOB TIGER II (3 ANSF WIA 1 ANSF KIA)'});
google.maps.event.addListener(marker, 'click', function( ){ document.location.href = '/afg/event/2007/08/AFG20070828n921.html'; });

marker = new google.maps.Marker({ position: new google.maps.LatLng( 31.53853035, 65.44568634 ), map: window.map, title: 'DIRECT FIRE CF  2 CF WIA'});
google.maps.event.addListener(marker, 'click', function( ){ document.location.href = '/afg/event/2006/09/AFG20060905n351.html'; });

marker = new google.maps.Marker({ position: new google.maps.LatLng( 35.0500412, 67.24564362 ), map: window.map, title: 'D6 010927ZAPR07 TF Cincinnatus Reports Natural Disaster in Bamyan Province (mod)'});
google.maps.event.addListener(marker, 'click', function( ){ document.location.href = '/afg/event/2007/04/AFG20070401n406.html'; });

marker = new google.maps.Marker({ position: new google.maps.LatLng( 32.99819946, 65.51631927 ), map: window.map, title: 'D3 190547Z TF BUSHMASTER IDF TIC IVO FOB COBRA (85x EKIA)'});
google.maps.event.addListener(marker, 'click', function( ){ document.location.href = '/afg/event/2007/11/AFG20071119n1054.html'; });

marker = new google.maps.Marker({ position: new google.maps.LatLng( 32.01453018, 64.83011627 ), map: window.map, title: 'IDF  FOB Robinson'});
google.maps.event.addListener(marker, 'click', function( ){ document.location.href = '/afg/event/2006/09/AFG20060914n428.html'; });

marker = new google.maps.Marker({ position: new google.maps.LatLng( 32.80611038, 66.58611298 ), map: window.map, title: 'DIRECT FIRE  Other'});
google.maps.event.addListener(marker, 'click', function( ){ document.location.href = '/afg/event/2004/06/AFG20040608n32.html'; });

marker = new google.maps.Marker({ position: new google.maps.LatLng( 32.16025925, 64.84945679 ), map: window.map, title: 'D9 271011Z TF BUSHMASTER DF TIC IVO SANGIEN DC 79XEKIA'});
google.maps.event.addListener(marker, 'click', function( ){ document.location.href = '/afg/event/2007/10/AFG20071027n1012.html'; });

marker = new google.maps.Marker({ position: new google.maps.LatLng( 34.52244568, 69.17324066 ), map: window.map, title: '(EXPLOSIVE HAZARD) IED EXPLOSION RPT  (PBIED) KCP LNO : 14 HNSF KIA 10 CIV KIA 55 CIV WIA 10 UE KIA'});
google.maps.event.addListener(marker, 'click', function( ){ document.location.href = '/afg/event/2009/02/AFG20090211n1624.html'; });

marker = new google.maps.Marker({ position: new google.maps.LatLng( 31.81424141, 64.56960297 ), map: window.map, title: '(EXPLOSIVE HAZARD) IED EXPLOSION RPT  (PBIED) CJTF-82 : 11 ANSF KIA 19 CIV KIA 52 CIV WIA 1 UE KIA'});
google.maps.event.addListener(marker, 'click', function( ){ document.location.href = '/afg/event/2007/09/AFG20070910n983.html'; });

marker = new google.maps.Marker({ position: new google.maps.LatLng( 34.52334976, 69.17215729 ), map: window.map, title: '(EXPLOSIVE HAZARD) IED EXPLOSION RPT  (PBIED) TF PALADIN : 4 CF KIA 24 ANSF KIA 47 ANSF WIA 7 CIV KIA 15 CIV WIA 1 UE KIA'});
google.maps.event.addListener(marker, 'click', function( ){ document.location.href = '/afg/event/2007/06/AFG20070617n810.html'; });

marker = new google.maps.Marker({ position: new google.maps.LatLng( 32.66178894, 65.52017212 ), map: window.map, title: 'D23 251511Z TF BUSHMASTER DF TIC IVO FOB TYCZ BDA 67 EKIA, 3x NC WIA'});
google.maps.event.addListener(marker, 'click', function( ){ document.location.href = '/afg/event/2007/09/AFG20070925n944.html'; });

marker = new google.maps.Marker({ position: new google.maps.LatLng( 33.22914505, 69.51784515 ), map: window.map, title: '(ENEMY ACTION) DIRECT FIRE RPT  (Small Arms,RPG) GLORY TAC : 2 ANSF KIA 2 ANSF WIA 68 UE KIA'});
google.maps.event.addListener(marker, 'click', function( ){ document.location.href = '/afg/event/2008/07/AFG20080726n1272.html'; });

marker = new google.maps.Marker({ position: new google.maps.LatLng( 32.22755051, 64.68211365 ), map: window.map, title: 'DIRECT FIRE  Musa Qala'});
google.maps.event.addListener(marker, 'click', function( ){ document.location.href = '/afg/event/2006/12/AFG20061202n484.html'; });

marker = new google.maps.Marker({ position: new google.maps.LatLng( 33.75294876, 69.86485291 ), map: window.map, title: 'N5 172154z TF Bushmaster TIC IVO FOB Chamkami'});
google.maps.event.addListener(marker, 'click', function( ){ document.location.href = '/afg/event/2007/05/AFG20070517n793.html'; });

marker = new google.maps.Marker({ position: new google.maps.LatLng( 32.61856079, 69.41634369 ), map: window.map, title: '221315z TF Eagle imminent threat at FOB Bermel'});
google.maps.event.addListener(marker, 'click', function( ){ document.location.href = '/afg/event/2007/06/AFG20070622n800.html'; });

marker = new google.maps.Marker({ position: new google.maps.LatLng( 31.50094032, 65.39703369 ), map: window.map, title: 'DIRECT FIRE CF'});
google.maps.event.addListener(marker, 'click', function( ){ document.location.href = '/afg/event/2006/11/AFG20061122n485.html'; });

marker = new google.maps.Marker({ position: new google.maps.LatLng( 32.53572083, 66.74022675 ), map: window.map, title: '300643ZOCT06 DIRECT FIRE CF FB Lane (Daichopan): 1 CF KIA  estimate 55x EKIA and 20x EWIA.'});
google.maps.event.addListener(marker, 'click', function( ){ document.location.href = '/afg/event/2006/10/AFG20061030n367.html'; });

marker = new google.maps.Marker({ position: new google.maps.LatLng( 32.14392853, 64.80240631 ), map: window.map, title: 'D13 250910Z TF BUSHMASTER IDF TIC SANGIN DC BDA 1x US MIL KIA, 4x US MIL WIA, 25xEKIA'});
google.maps.event.addListener(marker, 'click', function( ){ document.location.href = '/afg/event/2007/09/AFG20070925n918.html'; });

marker = new google.maps.Marker({ position: new google.maps.LatLng( 31, 66.40000153 ), map: window.map, title: '(EXPLOSIVE HAZARD) IED EXPLOSION RPT  (UNK) OTHER : 50 CIV KIA'});
google.maps.event.addListener(marker, 'click', function( ){ document.location.href = '/afg/event/2004/01/AFG20040106n3.html'; });

marker = new google.maps.Marker({ position: new google.maps.LatLng( 34.23033524, 69.94571686 ), map: window.map, title: '(NON-COMBAT EVENT) NATURAL DISASTER RPT   TF VALIANT : 19 CIV KIA 51 CIV WIA'});
google.maps.event.addListener(marker, 'click', function( ){ document.location.href = '/afg/event/2009/04/AFG20090417n1820.html'; });

marker = new google.maps.Marker({ position: new google.maps.LatLng( 31.57365036, 64.37522125 ), map: window.map, title: 'IED'});
google.maps.event.addListener(marker, 'click', function( ){ document.location.href = '/afg/event/2006/08/AFG20060828n354.html'; });

marker = new google.maps.Marker({ position: new google.maps.LatLng( 31.58139992, 64.36139679 ), map: window.map, title: 'Explosive Hazard report merged from ISAF database'});
google.maps.event.addListener(marker, 'click', function( ){ document.location.href = '/afg/event/2006/08/AFG20060828n375.html'; });

marker = new google.maps.Marker({ position: new google.maps.LatLng( 32.53565979, 65.37995148 ), map: window.map, title: 'ISAF7 011235Z TF URUZGAN OFFENSIVE ENGAGEMENT IVO AGAR 60XEKIA'});
google.maps.event.addListener(marker, 'click', function( ){ document.location.href = '/afg/event/2007/10/AFG20071001n992.html'; });

marker = new google.maps.Marker({ position: new google.maps.LatLng( 32.61684036, 63.65338898 ), map: window.map, title: 'ISAF15 300625Z RC WEST ATK IVO GOLESTAN DC 8XANP KIA/3XANP WIA/50XEKIA'});
google.maps.event.addListener(marker, 'click', function( ){ document.location.href = '/afg/event/2007/10/AFG20071030n944.html'; });

marker = new google.maps.Marker({ position: new google.maps.LatLng( 33.31820679, 69.80177307 ), map: window.map, title: '(EXPLOSIVE HAZARD) IED EXPLOSION RPT  (SVBIED) 4-320 FA : 1 HNSF KIA 17 HNSF WIA 15 CIV KIA 40 CIV WIA 1 UE KIA'});
google.maps.event.addListener(marker, 'click', function( ){ document.location.href = '/afg/event/2008/12/AFG20081228n1606.html'; });

marker = new google.maps.Marker({ position: new google.maps.LatLng( 30.95649529, 66.43625641 ), map: window.map, title: '(EXPLOSIVE HAZARD) IED EXPLOSION RPT  (SVBIED) CJTF-82 : 30 CIV KIA 27 CIV WIA 1 UE KIA'});
google.maps.event.addListener(marker, 'click', function( ){ document.location.href = '/afg/event/2008/02/AFG20080218n1234.html'; });

marker = new google.maps.Marker({ position: new google.maps.LatLng( 31.61285973, 65.70381165 ), map: window.map, title: 'ENG - OTHER CIV Kandahar 20 CIV KIA 44 CIV WIA'});
google.maps.event.addListener(marker, 'click', function( ){ document.location.href = '/afg/event/2005/06/AFG20050601n96.html'; });

marker = new google.maps.Marker({ position: new google.maps.LatLng( 34.52695847, 69.16780853 ), map: window.map, title: 'IED ANP CIV Kabul 10 CIV KIA 54 CIV WIA 3 ANP KIA'});
google.maps.event.addListener(marker, 'click', function( ){ document.location.href = '/afg/event/2006/09/AFG20060930n331.html'; });

marker = new google.maps.Marker({ position: new google.maps.LatLng( 36.61360931, 68.87741852 ), map: window.map, title: '(FRIENDLY ACTION) CAS RPT  (Bomb) KDZ JTAC, F-15S : 56 UE KIA'});
google.maps.event.addListener(marker, 'click', function( ){ document.location.href = '/afg/event/2009/09/AFG20090903n2220.html'; });

marker = new google.maps.Marker({ position: new google.maps.LatLng( 34.54396057, 69.24958038 ), map: window.map, title: '(EXPLOSIVE HAZARD) IED EXPLOSION RPT  (SVBIED) UN / GBR CONVOY IVO  (ROUTE BOTTLE): 1 CF KIA 2 CF WIA 11 CIV KIA 52 CIV WIA 1 UE KIA'});
google.maps.event.addListener(marker, 'click', function( ){ document.location.href = '/afg/event/2009/08/AFG20090818n2120.html'; });

marker = new google.maps.Marker({ position: new google.maps.LatLng( 36.12252426, 68.68218994 ), map: window.map, title: 'D14 061230Z TF PHOENIX (RC N) PBIED IVO FOB KUNDUZ'});
google.maps.event.addListener(marker, 'click', function( ){ document.location.href = '/afg/event/2007/11/AFG20071106n1194.html'; });

marker = new google.maps.Marker({ position: new google.maps.LatLng( 34.27097321, 70.74846649 ), map: window.map, title: '(EXPLOSIVE HAZARD) IED EXPLOSION RPT  (SVBIED) RCP 4 / (3-1 BSTB) / TF VALIANT  : 1 CF KIA 7 CIV KIA 58 CIV WIA 1 UE KIA'});
google.maps.event.addListener(marker, 'click', function( ){ document.location.href = '/afg/event/2008/11/AFG20081113n1464.html'; });

marker = new google.maps.Marker({ position: new google.maps.LatLng( 35.05212021, 70.90773773 ), map: window.map, title: '(ENEMY ACTION) NONE SELECTED RPT  (Small Arms,RPG) TF BAYONET : 9 CF KIA 16 CF WIA 4 HNSF WIA 15 UE KIA 40 UE WIA'});
google.maps.event.addListener(marker, 'click', function( ){ document.location.href = '/afg/event/2008/07/AFG20080713n1298.html'; });

marker = new google.maps.Marker({ position: new google.maps.LatLng( 34.52730179, 69.16799927 ), map: window.map, title: 'Explosive Hazard report merged from ISAF database'});
google.maps.event.addListener(marker, 'click', function( ){ document.location.href = '/afg/event/2006/09/AFG20060930n339.html'; });

marker = new google.maps.Marker({ position: new google.maps.LatLng( 32.62521362, 65.45467377 ), map: window.map, title: '(EXPLOSIVE HAZARD) IED EXPLOSION RPT  (SVBIED) TF URUZGAN : 4 ANSF KIA 30 CIV KIA 15 CIV WIA 1 UE KIA'});
google.maps.event.addListener(marker, 'click', function( ){ document.location.href = '/afg/event/2008/07/AFG20080713n1311.html'; });

marker = new google.maps.Marker({ position: new google.maps.LatLng( 34.40942001, 70.49043274 ), map: window.map, title: 'DEMONSTRATION CIV Jalalabad Airfield 37 CIV KIA 10 CIV WIA'});
google.maps.event.addListener(marker, 'click', function( ){ document.location.href = '/afg/event/2005/05/AFG20050511n113.html'; });

marker = new google.maps.Marker({ position: new google.maps.LatLng( 32.85504532, 66.04560852 ), map: window.map, title: 'DIRECT FIRE ANA CIV FOB Cobra 3 CIV WIA 1 ANA WIA'});
google.maps.event.addListener(marker, 'click', function( ){ document.location.href = '/afg/event/2005/10/AFG20051010n185.html'; });

marker = new google.maps.Marker({ position: new google.maps.LatLng( 34.52863693, 69.16531372 ), map: window.map, title: '(EXPLOSIVE HAZARD) IED EXPLOSION RPT  (SVBIED) ANP : 1 CF WIA 2 HNSF KIA 2 HNSF WIA 10 CIV KIA 47 CIV WIA 1 UE KIA'});
google.maps.event.addListener(marker, 'click', function( ){ document.location.href = '/afg/event/2009/10/AFG20091008n2305.html'; });

marker = new google.maps.Marker({ position: new google.maps.LatLng( 34.66343689, 70.20856476 ), map: window.map, title: '(EXPLOSIVE HAZARD) IED EXPLOSION RPT  (PBIED) NDS : 23 HNSF KIA 54 HNSF WIA 1 UE KIA'});
google.maps.event.addListener(marker, 'click', function( ){ document.location.href = '/afg/event/2009/09/AFG20090902n2091.html'; });

marker = new google.maps.Marker({ position: new google.maps.LatLng( 32.375, 63.82165909 ), map: window.map, title: 'MVMT TO CONT  Delram'});
google.maps.event.addListener(marker, 'click', function( ){ document.location.href = '/afg/event/2005/04/AFG20050428n89.html'; });

marker = new google.maps.Marker({ position: new google.maps.LatLng( 32.81813049, 65.95757294 ), map: window.map, title: '250537ZNOV06 DIRECT FIRE  CJSOTF Tarin Kowt'});
google.maps.event.addListener(marker, 'click', function( ){ document.location.href = '/afg/event/2006/11/AFG20061125n439.html'; });

marker = new google.maps.Marker({ position: new google.maps.LatLng( 31.10969162, 61.87792969 ), map: window.map, title: '(EXPLOSIVE HAZARD) IED EXPLOSION RPT  (PBIED)  : 10 ANSF KIA 12 CIV KIA 31 CIV WIA 1 UE KIA'});
google.maps.event.addListener(marker, 'click', function( ){ document.location.href = '/afg/event/2008/04/AFG20080417n1336.html'; });

marker = new google.maps.Marker({ position: new google.maps.LatLng( 31.81765938, 64.57109833 ), map: window.map, title: '(EXPLOSIVE HAZARD) IED EXPLOSION RPT  (PBIED) 2 RGR PMT / TFH : 2 CF KIA 2 CF WIA 1 HNSF WIA 17 CIV KIA 31 CIV WIA 1 UE KIA'});
google.maps.event.addListener(marker, 'click', function( ){ document.location.href = '/afg/event/2009/05/AFG20090507n1863.html'; });

marker = new google.maps.Marker({ position: new google.maps.LatLng( 32.71654129, 67.62458801 ), map: window.map, title: 'D11 241320Z TF 2 Fury reports LN 2xBus collision along HWY south of Gelan'});
google.maps.event.addListener(marker, 'click', function( ){ document.location.href = '/afg/event/2007/09/AFG20070924n851.html'; });

marker = new google.maps.Marker({ position: new google.maps.LatLng( 33.38555145, 70.30194092 ), map: window.map, title: 'DIRECT FIRE  Other'});
google.maps.event.addListener(marker, 'click', function( ){ document.location.href = '/afg/event/2005/03/AFG20050322n77.html'; });

marker = new google.maps.Marker({ position: new google.maps.LatLng( 32.55131912, 65.40570831 ), map: window.map, title: 'D3 120549Z TF BUSHMASTER DF TIC IVO FB TYCZ'});
google.maps.event.addListener(marker, 'click', function( ){ document.location.href = '/afg/event/2007/09/AFG20070912n906.html'; });

marker = new google.maps.Marker({ position: new google.maps.LatLng( 31.00431061, 66.3920517 ), map: window.map, title: 'IED ANP CIV Spin Buldak 25 CIV KIA 17 CIV WIA 1ANP WIA'});
google.maps.event.addListener(marker, 'click', function( ){ document.location.href = '/afg/event/2006/01/AFG20060116n218.html'; });

marker = new google.maps.Marker({ position: new google.maps.LatLng( 32.87857056, 66.12162781 ), map: window.map, title: 'ISAF13 160055Z TF URUZGAN TIC'});
google.maps.event.addListener(marker, 'click', function( ){ document.location.href = '/afg/event/2007/06/AFG20070616n735.html'; });

marker = new google.maps.Marker({ position: new google.maps.LatLng( 32.79375839, 67.28852081 ), map: window.map, title: '(ENEMY ACTION) DIRECT FIRE RPT  (Recoilless Rifle,Small Arms,RPG) TF BUSHMASTER : 1 CIV WIA 43 UE KIA'});
google.maps.event.addListener(marker, 'click', function( ){ document.location.href = '/afg/event/2008/10/AFG20081005n1481.html'; });

marker = new google.maps.Marker({ position: new google.maps.LatLng( 33.34036255, 69.92201233 ), map: window.map, title: '(EXPLOSIVE HAZARD) IED EXPLOSION RPT  (UNK) ANA / ANP / OCCP : 9 CIV KIA 42 CIV WIA 1 UE KIA'});
google.maps.event.addListener(marker, 'click', function( ){ document.location.href = '/afg/event/2009/06/AFG20090622n1900.html'; });

marker = new google.maps.Marker({ position: new google.maps.LatLng( 32.34987259, 64.77362061 ), map: window.map, title: '(EXPLOSIVE HAZARD) IED EXPLOSION RPT  (SVBIED) MUSA QALA DC : 2 HNSF KIA 5 CIV KIA 45 CIV WIA 1 UE KIA'});
google.maps.event.addListener(marker, 'click', function( ){ document.location.href = '/afg/event/2008/12/AFG20081201n1503.html'; });

marker = new google.maps.Marker({ position: new google.maps.LatLng( 32.62247086, 65.45662689 ), map: window.map, title: 'ISAF3 100538Z TF URUZGAN PBIED IVO FOB TYCZ, MM(S) 07-10C'});
google.maps.event.addListener(marker, 'click', function( ){ document.location.href = '/afg/event/2007/07/AFG20070710n842.html'; });

marker = new google.maps.Marker({ position: new google.maps.LatLng( 34.53239822, 69.1427536 ), map: window.map, title: 'ISAF2 290215Z RC Capital PBIED Detonation IVO HQ ISAF / 27xANA KIA, 20xANA WIA, 6xNC Injured'});
google.maps.event.addListener(marker, 'click', function( ){ document.location.href = '/afg/event/2007/09/AFG20070929n868.html'; });

marker = new google.maps.Marker({ position: new google.maps.LatLng( 32.37651443, 62.12138748 ), map: window.map, title: '(EXPLOSIVE HAZARD) IED EXPLOSION RPT  (VBIED) CJSOTF : 1 HNSF KIA 13 CIV KIA 33 CIV WIA'});
google.maps.event.addListener(marker, 'click', function( ){ document.location.href = '/afg/event/2009/11/AFG20091120n2568.html'; });

marker = new google.maps.Marker({ position: new google.maps.LatLng( 35.58096313, 63.32074356 ), map: window.map, title: '(ENEMY ACTION) INDIRECT FIRE RPT  (RPG,Small Arms) TF NORTH AND ANA FORCES : 3 CF WIA 11 HNSF KIA 5 HNSF WIA 1 CIV KIA 1 CIV WIA 20 UE KIA 10 UE WIA'});
google.maps.event.addListener(marker, 'click', function( ){ document.location.href = '/afg/event/2009/05/AFG20090529n1711.html'; });

marker = new google.maps.Marker({ position: new google.maps.LatLng( 32.76613998, 67.26087189 ), map: window.map, title: 'DIRECT FIRE  Deh Chopan'});
google.maps.event.addListener(marker, 'click', function( ){ document.location.href = '/afg/event/2005/05/AFG20050503n80.html'; });

marker = new google.maps.Marker({ position: new google.maps.LatLng( 32.64429092, 65.96607208 ), map: window.map, title: 'DIRECT FIRE CF CIV FOB Tarin Kowt 2 CF WIA 1 CIV WIA'});
google.maps.event.addListener(marker, 'click', function( ){ document.location.href = '/afg/event/2006/06/AFG20060623n283.html'; });

marker = new google.maps.Marker({ position: new google.maps.LatLng( 31.49762917, 65.376297 ), map: window.map, title: 'DIRECT FIRE'});
google.maps.event.addListener(marker, 'click', function( ){ document.location.href = '/afg/event/2006/12/AFG20061219n515.html'; });

marker = new google.maps.Marker({ position: new google.maps.LatLng( 32.38541031, 62.11862946 ), map: window.map, title: '(EXPLOSIVE HAZARD) IED EXPLOSION RPT  (PBIED) TF PALADIN : 2 ANSF WIA 2 CIV KIA 48 CIV WIA 1 UE KIA'});
google.maps.event.addListener(marker, 'click', function( ){ document.location.href = '/afg/event/2007/03/AFG20070301n590.html'; });

marker = new google.maps.Marker({ position: new google.maps.LatLng( 31.60732079, 65.70549774 ), map: window.map, title: '(EXPLOSIVE HAZARD) IED EXPLOSION RPT  (SVBIED) ANSF : 5 CIV KIA 44 CIV WIA 1 UE KIA'});
google.maps.event.addListener(marker, 'click', function( ){ document.location.href = '/afg/event/2008/11/AFG20081112n1458.html'; });

marker = new google.maps.Marker({ position: new google.maps.LatLng( 34.53911972, 69.18167114 ), map: window.map, title: '(EXPLOSIVE HAZARD) IED EXPLOSION RPT  (SVBIED) GIROA / LN : 4 HNSF KIA 5 CIV KIA 40 CIV WIA'});
google.maps.event.addListener(marker, 'click', function( ){ document.location.href = '/afg/event/2009/12/AFG20091215n2477.html'; });

marker = new google.maps.Marker({ position: new google.maps.LatLng( 30.16749954, 66.17250061 ), map: window.map, title: '(ENEMY ACTION) ATTACK RPT  (Small Arms,RPG) ABP : 40 UE KIA'});
google.maps.event.addListener(marker, 'click', function( ){ document.location.href = '/afg/event/2009/10/AFG20091011n2311.html'; });

marker = new google.maps.Marker({ position: new google.maps.LatLng( 33.51555634, 67.19649506 ), map: window.map, title: '(FRIENDLY ACTION) CAS RPT   TF RED CURRAHEE : 40 UE KIA'});
google.maps.event.addListener(marker, 'click', function( ){ document.location.href = '/afg/event/2008/07/AFG20080723n1302.html'; });

marker = new google.maps.Marker({ position: new google.maps.LatLng( 32.65892792, 66.80770874 ), map: window.map, title: '(EXPLOSIVE HAZARD) IED EXPLOSION RPT  (VOIED) CRP / B CO 1-4 INF : 35 UE KIA 10 UE WIA'});
google.maps.event.addListener(marker, 'click', function( ){ document.location.href = '/afg/event/2009/05/AFG20090528n1860.html'; });

marker = new google.maps.Marker({ position: new google.maps.LatLng( 32.38579941, 62.11930084 ), map: window.map, title: 'Explosive Hazard report merged from ISAF database'});
google.maps.event.addListener(marker, 'click', function( ){ document.location.href = '/afg/event/2007/03/AFG20070301n594.html'; });

marker = new google.maps.Marker({ position: new google.maps.LatLng( 33.23437119, 69.71911621 ), map: window.map, title: 'IED ANP CIV Khost PRT 6 CIV KIA 38 CIV WIA 2 ANP KIA 1ANP WIA'});
google.maps.event.addListener(marker, 'click', function( ){ document.location.href = '/afg/event/2006/09/AFG20060911n349.html'; });

marker = new google.maps.Marker({ position: new google.maps.LatLng( 34.54854584, 69.20163727 ), map: window.map, title: 'D1. 130407Z TF GLADIUS REPORTS VBIED IVO KABUL/CAMP EGGERS'});
google.maps.event.addListener(marker, 'click', function( ){ document.location.href = '/afg/event/2008/03/AFG20080313n1185.html'; });

marker = new google.maps.Marker({ position: new google.maps.LatLng( 31.58469963, 64.3588028 ), map: window.map, title: 'Explosive Hazard report merged from ISAF database'});
google.maps.event.addListener(marker, 'click', function( ){ document.location.href = '/afg/event/2006/09/AFG20060926n349.html'; });

marker = new google.maps.Marker({ position: new google.maps.LatLng( 34.12231445, 71.09492493 ), map: window.map, title: '(EXPLOSIVE HAZARD) IED EXPLOSION RPT  (SVBIED) 4BSTB : 22 CIV KIA 15 CIV WIA'});
google.maps.event.addListener(marker, 'click', function( ){ document.location.href = '/afg/event/2009/08/AFG20090828n2213.html'; });

marker = new google.maps.Marker({ position: new google.maps.LatLng( 31.61459923, 65.57634735 ), map: window.map, title: 'ISAF1 180445Z TF Kandahar Possible SVBIED Detonation IVO Kandahar PRT'});
google.maps.event.addListener(marker, 'click', function( ){ document.location.href = '/afg/event/2007/08/AFG20070818n894.html'; });

marker = new google.maps.Marker({ position: new google.maps.LatLng( 34.54862595, 69.21471405 ), map: window.map, title: '(EXPLOSIVE HAZARD) IED EXPLOSION RPT  (VBIED) TF PALADIN IVO  (ROUTE WHITE): 1 CF WIA 8 CIV KIA 35 CIV WIA 1 UE KIA'});
google.maps.event.addListener(marker, 'click', function( ){ document.location.href = '/afg/event/2008/03/AFG20080313n1186.html'; });

marker = new google.maps.Marker({ position: new google.maps.LatLng( 31.00452042, 66.4025116 ), map: window.map, title: 'ISAF6 131400Z TF KANDAHAR PBIED IVO SPIN BULDAK'});
google.maps.event.addListener(marker, 'click', function( ){ document.location.href = '/afg/event/2007/10/AFG20071013n989.html'; });

marker = new google.maps.Marker({ position: new google.maps.LatLng( 34.85477829, 69.64772034 ), map: window.map, title: '(ENEMY ACTION) INDIRECT FIRE RPT  (Mortar) TF KORRIGAN : 4 CIV KIA 42 CIV WIA'});
google.maps.event.addListener(marker, 'click', function( ){ document.location.href = '/afg/event/2009/11/AFG20091116n2340.html'; });

marker = new google.maps.Marker({ position: new google.maps.LatLng( 34.2472496, 70.83850098 ), map: window.map, title: '(EXPLOSIVE HAZARD) IED EXPLOSION RPT  (SVBIED) TF SPARTAN : 8 CIV KIA 34 CIV WIA 1 UE KIA'});
google.maps.event.addListener(marker, 'click', function( ){ document.location.href = '/afg/event/2007/03/AFG20070304n589.html'; });

marker = new google.maps.Marker({ position: new google.maps.LatLng( 31.8812809, 64.75892639 ), map: window.map, title: 'ISAF6 151333Z TF HELMAND DF TIC IVO FOB ARNHEM'});
google.maps.event.addListener(marker, 'click', function( ){ document.location.href = '/afg/event/2007/09/AFG20070915n976.html'; });

marker = new google.maps.Marker({ position: new google.maps.LatLng( 34.93420029, 69.24318695 ), map: window.map, title: '(EXPLOSIVE HAZARD) IED EXPLOSION RPT  (PBIED) TF GLADIUS : 3 CF KIA 2 CF WIA 1 HNSF KIA 15 CIV KIA 15 CIV WIA 1 UE KIA'});
google.maps.event.addListener(marker, 'click', function( ){ document.location.href = '/afg/event/2007/02/AFG20070227n583.html'; });

marker = new google.maps.Marker({ position: new google.maps.LatLng( 31.61828995, 65.70291138 ), map: window.map, title: 'ENG - OTHER ANP ANA CIV Kandahar 7 CIV KIA 8 CIV WIA 8 ANA KIA 5 ANA WIA 8 ANP KIA 5ANP WIA'});
google.maps.event.addListener(marker, 'click', function( ){ document.location.href = '/afg/event/2006/02/AFG20060207n263.html'; });

marker = new google.maps.Marker({ position: new google.maps.LatLng( 31.58465004, 64.35883331 ), map: window.map, title: 'IED ANP ANA CIV  11 CIV KIA 17 CIV WIA 3 ANA KIA 3 ANP KIA'});
google.maps.event.addListener(marker, 'click', function( ){ document.location.href = '/afg/event/2006/09/AFG20060926n343.html'; });

marker = new google.maps.Marker({ position: new google.maps.LatLng( 32.60538483, 65.45413971 ), map: window.map, title: '(EXPLOSIVE HAZARD) IED EXPLOSION RPT  (PBIED) TFU OPS / SFODA 7226 : 12 CIV KIA 27 CIV WIA'});
google.maps.event.addListener(marker, 'click', function( ){ document.location.href = '/afg/event/2009/11/AFG20091119n2477.html'; });

marker = new google.maps.Marker({ position: new google.maps.LatLng( 32.22660828, 64.68527222 ), map: window.map, title: 'D1 200409Z TF BUSHMASTER DF/IDF TIC WEST OF FOB ROBINSON 35XEKIA'});
google.maps.event.addListener(marker, 'click', function( ){ document.location.href = '/afg/event/2007/10/AFG20071020n960.html'; });

marker = new google.maps.Marker({ position: new google.maps.LatLng( 30.1125164, 66.17149353 ), map: window.map, title: '(ENEMY ACTION) ATTACK RPT   TF PEGASUS : 35 UE KIA'});
google.maps.event.addListener(marker, 'click', function( ){ document.location.href = '/afg/event/2009/10/AFG20091012n2200.html'; });

marker = new google.maps.Marker({ position: new google.maps.LatLng( 32.94079971, 69.18000031 ), map: window.map, title: 'Explosive Hazard report merged from ISAF database'});
google.maps.event.addListener(marker, 'click', function( ){ document.location.href = '/afg/event/2006/11/AFG20061126n420.html'; });

marker = new google.maps.Marker({ position: new google.maps.LatLng( 32.94083023, 69.18000031 ), map: window.map, title: '(EXPLOSIVE HAZARD) IED EXPLOSION RPT  (PBIED) TF 2-87 : 11 CIV KIA 25 CIV WIA 1 UE KIA'});
google.maps.event.addListener(marker, 'click', function( ){ document.location.href = '/afg/event/2006/11/AFG20061126n410.html'; });

marker = new google.maps.Marker({ position: new google.maps.LatLng( 31.53059769, 64.04375458 ), map: window.map, title: '(ENEMY ACTION) DIRECT FIRE RPT  (RPG,Mortar,Small Arms) TF BUSHMASTER : 33 UE KIA'});
google.maps.event.addListener(marker, 'click', function( ){ document.location.href = '/afg/event/2008/11/AFG20081128n1563.html'; });

marker = new google.maps.Marker({ position: new google.maps.LatLng( 31.59802818, 64.37346649 ), map: window.map, title: '(EXPLOSIVE HAZARD) IED EXPLOSION RPT  (PBIED) TF HELMAND/J CO 45 CDO : 8 HNSF KIA 3 CIV KIA 27 CIV WIA 1 UE KIA'});
google.maps.event.addListener(marker, 'click', function( ){ document.location.href = '/afg/event/2009/03/AFG20090316n1691.html'; });

marker = new google.maps.Marker({ position: new google.maps.LatLng( 32.62107849, 62.50337982 ), map: window.map, title: 'D6 061001Z TF BUSHMASTER SAF TIC NE OF FB FARAH'});
google.maps.event.addListener(marker, 'click', function( ){ document.location.href = '/afg/event/2007/07/AFG20070706n965.html'; });

marker = new google.maps.Marker({ position: new google.maps.LatLng( 33.11873627, 65.55265045 ), map: window.map, title: '(ENEMY ACTION) DIRECT FIRE RPT  (Small Arms) CJSOTF-A : 1 CF WIA 32 UE KIA'});
google.maps.event.addListener(marker, 'click', function( ){ document.location.href = '/afg/event/2009/06/AFG20090614n1937.html'; });

marker = new google.maps.Marker({ position: new google.maps.LatLng( 33.29351044, 69.91507721 ), map: window.map, title: '(EXPLOSIVE HAZARD) IED EXPLOSION RPT  (UNK) CJSOTF-A : 2 CIV KIA 40 CIV WIA'});
google.maps.event.addListener(marker, 'click', function( ){ document.location.href = '/afg/event/2006/01/AFG20060114n224.html'; });

marker = new google.maps.Marker({ position: new google.maps.LatLng( 31.8293705, 64.57235718 ), map: window.map, title: '(EXPLOSIVE HAZARD) IED EXPLOSION RPT  (PBIED) ANP : 6 HNSF KIA 14 HNSF WIA 6 CIV KIA 13 CIV WIA 2 UE KIA'});
google.maps.event.addListener(marker, 'click', function( ){ document.location.href = '/afg/event/2009/05/AFG20090510n1828.html'; });

marker = new google.maps.Marker({ position: new google.maps.LatLng( 32.15229416, 63.43690491 ), map: window.map, title: '(EXPLOSIVE HAZARD) IED EXPLOSION RPT  (PBIED)  : 10 ANSF KIA 15 ANSF WIA 5 CIV KIA 10 CIV WIA 1 UE KIA'});
google.maps.event.addListener(marker, 'click', function( ){ document.location.href = '/afg/event/2008/05/AFG20080515n1238.html'; });

marker = new google.maps.Marker({ position: new google.maps.LatLng( 32.24937439, 65.03805542 ), map: window.map, title: '(ENEMY ACTION) DIRECT FIRE RPT  (Small Arms,RPG) TF BUSHMASTER : 1 CF KIA 2 CF WIA 30 UE KIA'});
google.maps.event.addListener(marker, 'click', function( ){ document.location.href = '/afg/event/2008/07/AFG20080712n1322.html'; });

marker = new google.maps.Marker({ position: new google.maps.LatLng( 32.61549377, 65.89388275 ), map: window.map, title: '(EXPLOSIVE HAZARD) IED EXPLOSION RPT  (PBIED) TF URUZGAN/ANA : 21 HNSF KIA 8 HNSF WIA 1 CIV KIA 6 CIV WIA 1 UE KIA'});
google.maps.event.addListener(marker, 'click', function( ){ document.location.href = '/afg/event/2009/02/AFG20090202n1596.html'; });

marker = new google.maps.Marker({ position: new google.maps.LatLng( 34.35759735, 62.19530487 ), map: window.map, title: '(EXPLOSIVE HAZARD) IED EXPLOSION RPT  (RCIED) RC(W) PRT HRT : 2 HNSF KIA 8 HNSF WIA 8 CIV KIA 21 CIV WIA'});
google.maps.event.addListener(marker, 'click', function( ){ document.location.href = '/afg/event/2009/08/AFG20090803n1979.html'; });

marker = new google.maps.Marker({ position: new google.maps.LatLng( 32.70066071, 65.92637634 ), map: window.map, title: 'DIRECT FIRE ANP ANA FOB Tarin Kowt 4 ANA KIA 2 ANA WIA 1 ANP KIA 3ANP WIA'});
google.maps.event.addListener(marker, 'click', function( ){ document.location.href = '/afg/event/2006/05/AFG20060523n273.html'; });

marker = new google.maps.Marker({ position: new google.maps.LatLng( 30.98536682, 66.34755707 ), map: window.map, title: '(EXPLOSIVE HAZARD) IED EXPLOSION RPT  (SVBIED) TF ANZIO (ABP) : 4 ANSF KIA 4 ANSF WIA 4 CIV KIA 26 CIV WIA 1 UE KIA'});
google.maps.event.addListener(marker, 'click', function( ){ document.location.href = '/afg/event/2008/09/AFG20080928n1489.html'; });

}

