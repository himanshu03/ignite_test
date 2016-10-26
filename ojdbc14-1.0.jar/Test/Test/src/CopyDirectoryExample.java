
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;

public class CopyDirectoryExample {
	public static void main(String[] args) {
		File srcFolder = new File("C:\\Users\\sjariwala\\Desktop\\SourceFolder");
		File destFolder = new File("C:\\Users\\sjariwala\\Desktop\\DestinationFolder");

		// make sure source exists
		if (!srcFolder.exists()) {

			System.out.println("Directory does not exist.");
			// just exit
			System.exit(0);

		} else {

			try {
				copyFolder(srcFolder, destFolder);
				
			} catch (IOException e) {
				e.printStackTrace();
				// error, just exit
				System.exit(0);
			}
			finally{
				File destroy=new File("C:\\Users\\sjariwala\\Desktop\\SourceFolder");
				String files[] = destroy.list();

				for(String one : files){
					
					destroy.renameTo(new File("Successfully Copied "+one));
				}
				
			}
		}

		System.out.println("Done");
	}

	public static void copyFolder(File src, File dest) throws IOException {

		if (src.isDirectory()) {

			// if directory not exists, create it
			if (!dest.exists()) {
				dest.mkdir();
				System.out.println("Directory copied from " + src + "  to " + dest);
			}

			// list all the directory contents
			String files[] = src.list();

			for (String file : files) {
				// construct the src and dest file structure
				File srcFile = new File(src, file);
				File destFile = new File(dest, file);
				// recursive copy
				copyFolder(srcFile, destFile);
			}

		} else {

			InputStream in = new FileInputStream(src);
			OutputStream out = new FileOutputStream(dest);

			byte[] buffer = new byte[1024];

			int length;

			while ((length = in.read(buffer)) > 0) {
				out.write(buffer, 0, length);

			}

			in.close();
			out.close();
			System.out.println("File copied from " + src + " to " + dest);
		}
	}
}