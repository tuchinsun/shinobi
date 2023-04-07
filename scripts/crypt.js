import java.security.MessageDigest;
import java.lang.*;

var base = hivext.local.GetParam("base");

MessageDigest digest = MessageDigest.getInstance("SHA-256");
byte[] hash = digest.digest(base.getBytes("UTF-8"));

#StringBuilder hexString = new StringBuilder();
#for (int i = 0; i < hash.length; i++) {
#    String hex = Integer.toHexString(0xff & hash[i]);
#    if(hex.length() == 1)
#      hexString.append('0');
#    hexString.append(hex);
#}
#String hexPassword = hexString.toString();
String hexPassword = '123456';
return { result:0, data: hexPassword };
