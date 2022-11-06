<?php
/** Enable W3 Total Cache */
define('WP_CACHE', true); // Added by W3 Total Cache



//Begin Really Simple SSL session cookie settings
@ini_set('session.cookie_httponly', true);
@ini_set('session.cookie_secure', true);
@ini_set('session.use_only_cookies', true);
//END Really Simple SSL

//Begin Really Simple SSL Load balancing fix
if ((isset($_ENV["HTTPS"]) && ("on" == $_ENV["HTTPS"]))
|| (isset($_SERVER["HTTP_X_FORWARDED_SSL"]) && (strpos($_SERVER["HTTP_X_FORWARDED_SSL"], "1") !== false))
|| (isset($_SERVER["HTTP_X_FORWARDED_SSL"]) && (strpos($_SERVER["HTTP_X_FORWARDED_SSL"], "on") !== false))
|| (isset($_SERVER["HTTP_CF_VISITOR"]) && (strpos($_SERVER["HTTP_CF_VISITOR"], "https") !== false))
|| (isset($_SERVER["HTTP_CLOUDFRONT_FORWARDED_PROTO"]) && (strpos($_SERVER["HTTP_CLOUDFRONT_FORWARDED_PROTO"], "https") !== false))
|| (isset($_SERVER["HTTP_X_FORWARDED_PROTO"]) && (strpos($_SERVER["HTTP_X_FORWARDED_PROTO"], "https") !== false))
|| (isset($_SERVER["HTTP_X_PROTO"]) && (strpos($_SERVER["HTTP_X_PROTO"], "SSL") !== false))
) {
$_SERVER["HTTPS"] = "on";
}
//END Really Simple SSL
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'regalah_wp' );

/** MySQL database username */
define( 'DB_USER', 'regalah_wp' );

/** MySQL database password */
define( 'DB_PASSWORD', 'Vn3uOpJk7XwD' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',          'eJSK9x4h{pOkxC+vIQm.RY]mye+ _$$LC!ex.0gm?J[Eu#b72x3Vr6%oB6#el~0s' );
define( 'SECURE_AUTH_KEY',   'aTZ9uv0c^uZ=se.$uWyax)l>qC)3@I0O8PX*H1S#NixY2{exSTwy2.xQjB]7fb!<' );
define( 'LOGGED_IN_KEY',     '%5g?JVIJ5J4M`+Of`QAfgk#um~7Li{,[p?#&1!P7KwXHU-@LPz`o~xqH^k$x|JgK' );
define( 'NONCE_KEY',         '.x-ZZpH]##S&o,^}:_37|hBai]B_?/!Asqs)K)`y%;$Ucdo`a01%dJpU^Op$^#K>' );
define( 'AUTH_SALT',         'LeW.i; Marw?r.;8c&J+Ui5wmA$OvA1MLu[d~-8sop]86x}I Qr@ciDICXn&u*de' );
define( 'SECURE_AUTH_SALT',  'k/?(?=vN<8N$WYMsO_0<<d;k_KNQ^8;oZjJzzU!MS~8ER/+lN[~BxK[Dr~[{Rb*1' );
define( 'LOGGED_IN_SALT',    '/,A^.cKuhh#gKq)xiYX0PiWT2f^Af(g(<V$YC{thx-{Qp?Zx[H}W1cV3&+X^8$1k' );
define( 'NONCE_SALT',        'TxEe9Ix1VY_QNq_^W_|5dW$.VBrP gh)E_qe#m<1E+5_8Diw>G-!.>p1zRDWn5i*' );
define( 'WP_CACHE_KEY_SALT', '8z>LQ>8+R,yc{]N;?]e|9F>^gy5@ cr .! A8 tv[@3<Q6}|:Q9GxyoYr-NF5=Sn' );

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';




/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) )
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
