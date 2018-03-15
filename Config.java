package com;

import org.apache.log4j.PropertyConfigurator;

import java.io.FileReader;
import java.util.Properties;
import java.util.concurrent.ConcurrentHashMap;

/**
 * Тохиргооны класс
 * 
 * @author ub
 *
 */
public class Config {
	// WokingDirectory хавтас
	public static String HOME = "conf";
	public static boolean DEBUG = false;

	static final ConcurrentHashMap<String, Properties> propsMap = new ConcurrentHashMap<>();

	static {
		//HOME = System.getProperty("erp.home");
		DEBUG = Boolean.parseBoolean(System.getProperty("erp.debug", "false"));

		// log4j тохируулах
		PropertyConfigurator.configure(HOME + "/chub.properties");

	}

	public static Properties get(String fileName) throws Exception {
		if (!propsMap.containsKey(fileName)) {

			try (FileReader reader = new FileReader(HOME + "/" + fileName))  {
				Properties properties = new Properties();
				properties.load(reader);

				propsMap.put(fileName, properties);
			}
		}

		return propsMap.get(fileName);
	}
}
