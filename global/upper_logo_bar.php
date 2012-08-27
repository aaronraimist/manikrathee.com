	<div class="row">
		<div class="upper_logo_bar">
			<?php if ($upper=='white') { echo '
				<a href="http://manikrathee.com/" class="logo tooltip logo-light" title="Click to go home."></a>
			'; } ?>
			<?php if ($upper=='dark') { echo '
				<a href="http://manikrathee.com/" class="logo tooltip logo-dark" title="Click to go home."></a>
			'; } ?>

			<ul id="nav" class="full_nav <!-- <?php if ($upper=='white') { echo 'white'; } ?><?php if ($upper=='dark') { echo 'dark'; } ?>  --> ">
				<li><a href="/" title="Go Home."></a>Home</li>
				<li><a href="/about.php" title="About Manik Rathee">About</a></li>
				<li>
					<a href="/projects.php" title="View Projects">Projects</a>
					<ul>
						<li><a href="/catalyst-iphone-theme.php" title="View Project: CATALYST iOS Theme">Catalyst iOS</a></li>
						<li><a href="/manik-rathee-photography.php" title="View Project: Manik Rathee Photography">Manik Rathee Photography</a></li>
						<li><a href="/hope-will-see-us-through.php" title="View Project: Hope Will See Us Through">Hope Will See Us Through</a></li>
						<li><a href="/wrapskins.php" title="View Project: Wrapskins">Wrapskins</a></li>
						<li><a href="/livescribe-smart-pen.php" title="View Project: LiveScribe Smartpen">Livescribe</a></li>
						<li><a href="/universal-shanti.php" title="View Project: Universal Shanti">Universal Shanti</a></li>
						<li><a href="/blog.php" title="View Project: Blog">Blog</a></li>
					</ul>
				</li>
				<li><a href="/contact.php" title="Contact Manik Rathee">Contact</a></li>
			</ul>
			<!-- <div class="mobile_nav">
				<form id="page-changer" action="" method="post">
				    <select name="nav">
				        <option value="">Choose Project:</option>
				        <option value="interior_catalyst.php">Catalyst iOS</option>
				        <option value="interior_mrphoto.php">Manik Rathee Photography</option>
				        <option value="interior_hope.php">Hope Will See Us Through</option>
						<option value="interior_wrap.php">Wrapskins</option>
						<option value="interior_livescribe.php">Livescribe</option>
						<option value="interior_universalshanti.php">Universal Shanti</option>
						<option value="interior_blog.php">Manik Rathee's Blog</option>
				    </select>
				    <input type="submit" value="Go" id="submit" />
				</form>
			</div> -->
		</div>
	</div>