import java.security.MessageDigest;
import java.lang.*;

var base = ${globals.super.pass};
System.out.println(base.toString());
MessageDigest digest = MessageDigest.getInstance("SHA-256");
byte[] hash = digest.digest(base.getBytes("UTF-8"));
StringBuilder hexString = new StringBuilder();
for (int i = 0; i < hash.length; i++) {
    final String hex = Integer.toHexString(0xff & hash[i]);
    if(hex.length() == 1)
      hexString.append('0');
    hexString.append(hex);
}
String hexPassword = hexString.toString();
return hexPassword;
