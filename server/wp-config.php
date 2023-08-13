<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'storageriser' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '.`,)q)RIpG>_$%9YK7DJq0(G5bs^q&$8|y*(X7N_^]H31GS3QM?a%T)a?o%(L34)' );
define( 'SECURE_AUTH_KEY',  'yk6X>l|#jqCB:CvothIF^>fN[Fwl@O1KX;2H:VhmfT>A+zZ{hgW9.ibaR/lxlI/c' );
define( 'LOGGED_IN_KEY',    'Zq{<Hz|6;on?E7JQBql(=my#FMF)59:p.ly>$lKZRY*^.#CW_N>5ySagxe<pyXx8' );
define( 'NONCE_KEY',        '{Gsz<{>&mxP[t<d]hyo-WGM%Md;IlBQx1w@xid|ojE(uQpQ<aw3(&Kjyi;Qn!Z@@' );
define( 'AUTH_SALT',        'A.=-e_@?fg4CexrhNx_Ds4|V%Kw4YP%/zS^;JjQ?]F*#7:94k5r9etzi+uR8$:4B' );
define( 'SECURE_AUTH_SALT', 'cA0n)nkm4W*a8&Y7A{QTgZS;0D#3$>e|RO4S$~ya@p3o&&vReyMYf{L)c_2A ryx' );
define( 'LOGGED_IN_SALT',   ']8_Qs*.67mEp r8%;o|51JfM[%#+)*#h5)~~QjRr4]|$wDOh&5j{[F6I}V@zeyTw' );
define( 'NONCE_SALT',       'lre?K3SPb8zfc;}zHid~<fqP5}%[tt!C-8et_/F<?_FCJg@KURl+!B)+HWC;iy`8' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
